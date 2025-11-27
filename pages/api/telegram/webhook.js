// pages/api/telegram/webhook.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://movieondemand.vercel.app';

  if (!TELEGRAM_BOT_TOKEN) {
    console.error('TELEGRAM_BOT_TOKEN environment variable is missing');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  console.log('=== WEBHOOK RECEIVED ===');

  try {
    const update = req.body;
    console.log('Update:', JSON.stringify(update, null, 2));
    
    if (update.message) {
      await handleMessage(update.message, TELEGRAM_BOT_TOKEN, BASE_URL);
    } else if (update.callback_query) {
      await handleCallbackQuery(update.callback_query, TELEGRAM_BOT_TOKEN, BASE_URL);
    }

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Telegram webhook error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function handleMessage(message, TELEGRAM_BOT_TOKEN, BASE_URL) {
  const chatId = message.chat.id;
  const text = message.text || '';

  console.log(`Processing message from ${chatId}: ${text}`);

  // Extract movie slug from /start command if present
  let movieSlug = '';
  if (text.startsWith('/start')) {
    const parts = text.split(' ');
    movieSlug = parts[1] || '';
    console.log('Movie slug found:', movieSlug);
  }

  // If we have a movie slug, send DIRECT VIDEO LINK immediately
  if (movieSlug) {
    await sendVideoLink(chatId, movieSlug, TELEGRAM_BOT_TOKEN, BASE_URL);
  } else {
    // Only send welcome message if no movie slug
    await sendWelcomeMessage(chatId, movieSlug, TELEGRAM_BOT_TOKEN, BASE_URL);
  }
}

async function handleCallbackQuery(callbackQuery, TELEGRAM_BOT_TOKEN, BASE_URL) {
  const chatId = callbackQuery.from.id;
  const data = callbackQuery.data;

  console.log(`Processing callback from ${chatId}: ${data}`);

  await answerCallbackQuery(callbackQuery.id, TELEGRAM_BOT_TOKEN);

  if (data.startsWith('movie_')) {
    const movieSlug = data.replace('movie_', '');
    if (/^[a-zA-Z0-9-]+$/.test(movieSlug)) {
      await sendVideoLink(chatId, movieSlug, TELEGRAM_BOT_TOKEN, BASE_URL);
    } else {
      await sendErrorMessage(chatId, TELEGRAM_BOT_TOKEN, BASE_URL);
    }
  } else if (data === 'no_movie') {
    await sendNoMovieMessage(chatId, TELEGRAM_BOT_TOKEN, BASE_URL);
  }
}

async function sendWelcomeMessage(chatId, movieSlug, TELEGRAM_BOT_TOKEN, BASE_URL) {
  const welcomeText = `🎬 *Movie On Demand Bot* 🎬

Get instant access to movie links directly in Telegram!

Click below to get started:`;

  const keyboard = {
    inline_keyboard: [
      [
        {
          text: '🎬 GET MOVIE LINK 🎬',
          callback_data: movieSlug ? `movie_${movieSlug}` : 'no_movie'
        }
      ],
      [
        {
          text: '🌐 VISIT WEBSITE',
          url: BASE_URL
        }
      ]
    ]
  };

  await sendTelegramMessage(chatId, welcomeText, TELEGRAM_BOT_TOKEN, keyboard);
}

async function sendVideoLink(chatId, movieSlug, TELEGRAM_BOT_TOKEN, BASE_URL) {
  console.log('Sending video link for slug:', movieSlug);

  const videoLink = `${BASE_URL}/video/${movieSlug}`;

  const userText = `🎬 *Direct Video Link Ready!* 🎬

📺 *Click the link below to watch:*
${videoLink}

Enjoy your movie! 🍿`;

  console.log('Sending direct video link:', videoLink);
  await sendTelegramMessage(chatId, userText, TELEGRAM_BOT_TOKEN, null, true);
}

async function sendNoMovieMessage(chatId, TELEGRAM_BOT_TOKEN, BASE_URL) {
  const text = `📺 *Browse Movies*

Visit our website to find movies and get direct links:

${BASE_URL}

Click "Get Telegram Link" on any movie page to get the direct video link here!`;
  
  await sendTelegramMessage(chatId, text, TELEGRAM_BOT_TOKEN, null, true);
}

async function sendErrorMessage(chatId, TELEGRAM_BOT_TOKEN, BASE_URL) {
  const text = `❌ *Invalid Request*

Please use the website to get valid movie links:

${BASE_URL}`;
  
  await sendTelegramMessage(chatId, text, TELEGRAM_BOT_TOKEN, null, true);
}

async function sendTelegramMessage(chatId, text, TELEGRAM_BOT_TOKEN, replyMarkup, disablePreview = true) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  
  const body = {
    chat_id: chatId,
    text: text,
    parse_mode: 'Markdown',
    disable_web_page_preview: disablePreview,
    ...(replyMarkup && { reply_markup: replyMarkup })
  };

  console.log('Sending message to Telegram API...');

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();
    
    if (!response.ok) {
      console.error('Telegram API error:', result);
      return null;
    } else {
      console.log('Message sent successfully to:', chatId);
      return result.result;
    }
  } catch (error) {
    console.error('Error sending Telegram message:', error);
    return null;
  }
}

async function answerCallbackQuery(callbackQueryId, TELEGRAM_BOT_TOKEN) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/answerCallbackQuery`;
  
  const body = {
    callback_query_id: callbackQueryId
  };

  try {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.error('Error answering callback query:', error);
  }
}