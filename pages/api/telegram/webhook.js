export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(200).send("OK");

  const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const BASE = process.env.NEXT_PUBLIC_BASE_URL || "https://movieondemand.vercel.app";
  const update = req.body;

  // -------------------------
  // USER CLICKED BUTTON FROM SITE
  // Always send menu with CALLBACK button
  // -------------------------
  if (update.message && update.message.text.startsWith("/start")) {

    const parts = update.message.text.split(" ");
    const slug = parts[1] || ""; 

    const text =
      `🎬 *Choose an option*\n\n` +
      `Movie: *${slug || "Unknown"}*`;

    const keyboard = {
      inline_keyboard: [
        [
          { text: "▶️ Direct Movie Link", callback_data: `video_${slug}` }
        ],
        [
          { text: "🌐 Open Website", url: `${BASE}/movie/${slug}` }
        ]
      ]
    };

    await sendMessage(update.message.chat.id, text, keyboard);
    return res.status(200).json({ ok: true });
  }

  // -------------------------
  // CALLBACK BUTTON CLICKED
  // -------------------------
  if (update.callback_query) {
    const chatId = update.callback_query.message.chat.id;
    const data = update.callback_query.data;

    if (data.startsWith("video_")) {
      const slug = data.replace("video_", "");

      const videoURL = `${BASE}/video/${slug}`;

      await sendMessage(chatId, `🎬 *Direct Link*\n${videoURL}`);
      return res.status(200).json({ ok: true });
    }
  }

  return res.status(200).json({ ok: true });

  async function sendMessage(chatId, text, reply_markup = null) {
    await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
        reply_markup,
        disable_web_page_preview: true
      }),
    });
  }
}
