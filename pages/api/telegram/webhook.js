export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const BASE = process.env.NEXT_PUBLIC_BASE_URL || "https://movieondemand.vercel.app";

  try {
    const update = req.body;

    if (update.message) {
      const text = update.message.text || "";
      const chatId = update.message.chat.id;

      // /start slug
      if (text.startsWith("/start")) {
        const slug = text.split(" ")[1] || null;

        if (slug) {
          await sendMovie(chatId, slug, TOKEN, BASE);
        } else {
          await sendWelcome(chatId, TOKEN, BASE);
        }

        return res.status(200).json({ ok: true });
      }
    }

    if (update.callback_query) {
      const chatId = update.callback_query.from.id;
      const data = update.callback_query.data;

      await answer(update.callback_query.id, TOKEN);

      if (data.startsWith("movie_")) {
        const slug = data.replace("movie_", "");
        await sendMovie(chatId, slug, TOKEN, BASE);
      } else {
        await sendWelcome(chatId, TOKEN, BASE);
      }
    }

    return res.status(200).json({ ok: true });

  } catch (err) {
    console.error(err);
    return res.status(200).json({ ok: true });
  }
}

async function sendMovie(chatId, slug, TOKEN, BASE) {
  const videoUrl = `${BASE}/video/${slug}`;
  const movieUrl = `${BASE}/movie/${slug}`;

  const text = `🎬 *Your Movie Link is Ready*\n\n` +
    `📺 Direct Video:\n${videoUrl}\n\n` +
    `🌐 Movie Page:\n${movieUrl}\n\n` +
    `Enjoy your movie 🍿`;

  return callAPI("sendMessage", TOKEN, {
    chat_id: chatId,
    text,
    parse_mode: "Markdown",
    disable_web_page_preview: true
  });
}

async function sendWelcome(chatId, TOKEN, BASE) {
  const text = `🎬 Welcome!\n\nSend a movie from the website to get the direct link here.\n${BASE}`;
  return callAPI("sendMessage", TOKEN, {
    chat_id: chatId,
    text,
    parse_mode: "Markdown"
  });
}

async function answer(id, TOKEN) {
  return callAPI("answerCallbackQuery", TOKEN, {
    callback_query_id: id
  });
}

async function callAPI(method, TOKEN, body) {
  const url = `https://api.telegram.org/bot${TOKEN}/${method}`;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
}
