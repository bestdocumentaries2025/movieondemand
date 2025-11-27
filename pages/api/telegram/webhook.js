export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).send("OK"); // Telegram must ALWAYS get 200
  }

  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://movieondemand.vercel.app";

  const update = req.body;

  if (update.message) {
    await handleMessage(update.message, TELEGRAM_BOT_TOKEN, BASE_URL);
  }

  if (update.callback_query) {
    await handleCallback(update.callback_query, TELEGRAM_BOT_TOKEN, BASE_URL);
  }

  return res.status(200).json({ ok: true });
}

// --- MESSAGE HANDLER ---
async function handleMessage(msg, token, BASE_URL) {
  const chatId = msg.chat.id;
  let slug = "";

  if (msg.text.startsWith("/start")) {
    const arr = msg.text.split(" ");
    slug = arr[1] || "";
  }

  const text = `🎬 Movie Link Ready\n\nClick the button below`;

  const keyboard = {
    inline_keyboard: [
      [
        {
          text: "GET VIDEO LINK 🎬",
          callback_data: slug ? `movie_${slug}` : "nomovie",
        }
      ],
    ],
  };

  await sendMessage(chatId, text, token, keyboard);
}

// --- CALLBACK HANDLER ---
async function handleCallback(query, token, BASE_URL) {
  const chatId = query.message.chat.id;
  const data = query.data;

  if (data.startsWith("movie_")) {
    const slug = data.replace("movie_", "");
    const link = `${BASE_URL}/video/${slug}`;

    const text = `🎬 DIRECT MOVIE LINK\n${link}`;

    await sendMessage(chatId, text, token, null, true);
  }

  return;
}

// --- SEND MESSAGE ---
async function sendMessage(chatId, text, token, reply_markup = null, disablePreview = true) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "Markdown",
      disable_web_page_preview: disablePreview,
      ...(reply_markup && { reply_markup })
    }),
  });
}
