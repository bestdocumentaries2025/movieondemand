// pages/api/telegram/webhook.js
export default async function handler(req, res) {
  // Accept GET/HEAD so Telegram's probe or browser checks don't get 405
  if (req.method === 'GET' || req.method === 'HEAD') {
    // Simple health response for webhook probes
    return res.status(200).json({ ok: true, msg: 'webhook endpoint' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://movieondemand.vercel.app';
  if (!TELEGRAM_BOT_TOKEN) {
    console.error('Missing TELEGRAM_BOT_TOKEN');
    return res.status(500).json({ error: 'Server misconfiguration' });
  }

  try {
    const update = req.body || {};
    // Telegram delivers updates as JSON POST
    if (update.message) {
      await handleMessage(update.message, TELEGRAM_BOT_TOKEN, BASE_URL);
    } else if (update.callback_query) {
      await handleCallbackQuery(update.callback_query, TELEGRAM_BOT_TOKEN, BASE_URL);
    } else {
      // Unknown update type - return OK so Telegram stops retrying for this update
      console.log('Unhandled update type', Object.keys(update));
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Webhook handler error', err);
    // Always reply 200 to Telegram; log the error for debugging
    return res.status(200).json({ ok: true });
  }
}

async function handleMessage(message, token, base) {
  const chatId = message.chat.id;
  const text = (message.text || '').trim();

  // Examples of incoming texts:
  // "/start" OR "/start slug-value" OR normal user text
  if (text.startsWith('/start')) {
    const parts = text.split(' ').filter(Boolean);
    const slug = parts[1] || null;

    if (slug) {
      // Normal deep-linking case: send the direct URLs
      return sendMovieLinks(chatId, slug, token, base);
    } else {
      // No slug — user either opened bot manually or bot already started.
      // Provide a helpful message + buttons so they can re-open the deep link properly.
      return sendNoSlugResponse(chatId, token, base);
    }
  }

  // For other text, you can extend behavior here.
  // For now, show welcome message with instructions.
  return sendWelcomeMessage(chatId, token, base);
}

async function handleCallbackQuery(callback, token, base) {
  const chatId = callback.from.id;
  const data = callback.data || '';

  // Acknowledge the callback to remove the spinner in the client
  await answerCallbackQuery(callback.id, token);

  if (data.startsWith('movie_')) {
    const slug = data.replace(/^movie_/, '');
    if (/^[a-zA-Z0-9-_]+$/.test(slug)) {
      return sendMovieLinks(chatId, slug, token, base);
    }
  }

  return sendWelcomeMessage(chatId, token, base);
}

async function sendMovieLinks(chatId, slug, token, base) {
  const videoLink = `${base}/video/${slug}`;
  const movieLink = `${base}/movie/${slug}`;

  const text = `🎬 *Movie Link Ready!* 🎬\n\n` +
    `📺 *Direct Video Link:*\n${videoLink}\n\n` +
    `🌐 *Movie Page:*\n${movieLink}\n\n` +
    `Enjoy your movie 🍿`;

  return callApi('sendMessage', token, {
    chat_id: chatId,
    text,
    parse_mode: 'Markdown',
    disable_web_page_preview: true
  });
}

async function sendWelcomeMessage(chatId, token, base) {
  const text = `🎬 *Movie On Demand Bot*\n\nSend /start from the website (click "Get Link on Telegram" on a movie page) to receive direct video links here.`;
  const keyboard = {
    inline_keyboard: [
      [{ text: 'Open Website', url: base }]
    ]
  };

  return callApi('sendMessage', token, {
    chat_id: chatId,
    text,
    parse_mode: 'Markdown',
    reply_markup: keyboard
  });
}

async function sendNoSlugResponse(chatId, token, base) {
  // When user opened the bot without a slug, give them an easy "re-open with slug" button.
  // We'll provide both https and tg:// links (tg:// works in Telegram mobile clients).
  const text = `I didn't receive a movie link. To get a direct video link, please re-open the bot from the movie page by clicking the button below (or press Start after opening).`;

  // The website must provide the exact slug in the link; here we instruct and give a generic example
  // NOTE: on the website we will build the real deep link with the exact slug.
  const keyboard = {
    inline_keyboard: [
      [
        // Website deep-link; website should use encodeURIComponent slug
        { text: 'Open via Telegram (web/mobile)', url: `${base}` }
      ],
      [
        { text: 'How to get link', callback_data: 'help_get_link' }
      ]
    ]
  };

  return callApi('sendMessage', token, {
    chat_id: chatId,
    text,
    parse_mode: 'Markdown',
    reply_markup: keyboard,
    disable_web_page_preview: true
  });
}

async function answerCallbackQuery(id, token) {
  return callApi('answerCallbackQuery', token, { callback_query_id: id });
}

async function callApi(method, token, body) {
  const url = `https://api.telegram.org/bot${token}/${method}`;
  try {
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    const j = await r.json();
    if (!r.ok) console.error('Telegram API error', method, j);
    return j;
  } catch (err) {
    console.error('callApi fetch error', err);
    throw err;
  }
}
