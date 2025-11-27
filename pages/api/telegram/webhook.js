// pages/api/telegram/webhook.js
import moviesData from '../../../data/data.json';

export default async function handler(req, res) {
  // Log the request
  console.log('=== TELEGRAM WEBHOOK CALLED ===');
  console.log('Method:', req.method);
  console.log('Headers:', req.headers);
  
  if (req.method !== 'POST') {
    console.log('Returning 405 - Method not allowed');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://movieondemand.vercel.app';

  console.log('TELEGRAM_BOT_TOKEN exists:', !!TELEGRAM_BOT_TOKEN);
  
  if (!TELEGRAM_BOT_TOKEN) {
    console.error('TELEGRAM_BOT_TOKEN is missing');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const update = req.body;
    console.log('Update body:', JSON.stringify(update, null, 2));
    
    if (update.message) {
      await handleMessage(update.message, TELEGRAM_BOT_TOKEN, BASE_URL, moviesData);
    } else if (update.callback_query) {
      await handleCallbackQuery(update.callback_query, TELEGRAM_BOT_TOKEN, BASE_URL, moviesData);
    }

    console.log('Webhook processed successfully');
    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Telegram webhook error:', error);
    res.status(200).json({ ok: true }); // Always return 200 to Telegram
  }
}

async function handleMessage(message, TELEGRAM_BOT_TOKEN, BASE_URL, moviesData) {
  const chatId = message.chat.id;
  const text = message.text || '';

  console.log(`Processing message from ${chatId}: ${text}`);

  let movieSlug = '';
  if (text.startsWith('/start')) {
    const parts = text.split(' ');
    movieSlug = parts[1] || '';
    console.log('Movie slug from start command:', movieSlug);
  }

  await sendWelcomeMessage(chatId, movieSlug, TELEGRAM_BOT_TOKEN, BASE_URL, moviesData);
}

async function handleCallbackQuery(callbackQuery, TELEGRAM_BOT_TOKEN, BASE_URL, moviesData) {
  const chatId = callbackQuery.from.id;
  const data = callbackQuery.data;

  console.log(`Processing callback from ${chatId}: ${data}`);

  await answerCallbackQuery(callbackQuery.id, TELEGRAM_BOT_TOKEN);

  if (data.startsWith('movie_')) {
    const movieSlug = data.replace('movie_', '');
    if (/^[a-zA-Z0-9-]+$/.test(movieSlug)) {
      await sendMovieLinks(chatId, movieSlug, TELEGRAM_BOT_TOKEN, BASE_URL, moviesData);
    } else {
      await sendErrorMessage(chatId, TELEGRAM_BOT_TOKEN, BASE_URL);
    }
  } else if (data === 'no_movie') {
    await sendNoMovieMessage(chatId, TELEGRAM_BOT_TOKEN, BASE_URL);
  }
}

async function sendWelcomeMessage(chatId, movieSlug, TELEGRAM_BOT_TOKEN, BASE_URL, moviesData) {
  let movie = null;
  if (movieSlug) {
    movie = moviesData.find(m => m.slug === movieSlug);
  }

  const welcomeText = movie 
    ? `🎬 *${movie.title}* 🎬\n\nGet instant access to this movie directly in Telegram!` 
    : `🎬 *Movie On Demand Bot* 🎬\n\nGet instant access to movie links directly in Telegram!`;

  const keyboard = {
    inline_keyboard: [
      [
        {
          text: movie ? `🎬 GET "${movie.title.substring(0, 20)}..." LINK` : '🎬 BROWSE MOVIES 🎬',
          callback_data: movie ? `movie_${movie.slug}` : 'no_movie'
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

async function sendMovieLinks(chatId, movieSlug, TELEGRAM_BOT_TOKEN, BASE_URL, moviesData) {
  const movie = moviesData.find(m => m.slug === movieSlug);
  
  if (!movie) {
    await sendNoMovieMessage(chatId, TELEGRAM_BOT_TOKEN, BASE_URL);
    return;
  }

  const movieLink = `${BASE_URL}/movie/${movie.slug}`;
  
  const messageText = `🎬 *${movie.title}* 🎬

📅 *Year:* ${movie.releaseYear || 'N/A'}
⭐ *Rating:* ${movie.rating || 'N/A'}
🎭 *Genre:* ${movie.genre || 'N/A'}

📺 *Watch Now:*
${movieLink}

Enjoy your movie! 🍿`;

  await sendTelegramMessage(chatId, messageText, TELEGRAM_BOT_TOKEN, null, true);
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

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Telegram API error:', error);
      throw new Error(error.description || 'Telegram API error');
    }
    
    console.log('Message sent successfully to:', chatId);
    return await response.json();
  } catch (error) {
    console.error('Error sending Telegram message:', error);
    throw error;
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