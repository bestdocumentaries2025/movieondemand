export default async function handler(req, res) {
  // Telegram MUST always get 200 on any method
  if (req.method !== "POST") {
    return res.status(200).send("OK");
  }

  const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const BASE = process.env.NEXT_PUBLIC_BASE_URL || "https://movieondemand.vercel.app";

  const update = req.body;

  // Telegram deep-link: /start <slug>
  if (update.message && update.message.text.startsWith("/start")) {

    const parts = update.message.text.split(" ");
    const slug = parts[1] || "";

    if (!slug) {
      await send(update.message.chat.id, "❌ No movie found. Open from website.");
      return res.status(200).json({ ok: true });
    }

    const videoURL = `${BASE}/video/${slug}`;
    const movieURL = `${BASE}/movie/${slug}`;

    const text =
      `🎬 *Your Movie Link is Ready*\n\n` +
      `▶️ *Direct Video Link:*\n${videoURL}\n\n` +
      `📄 Movie Page:\n${movieURL}`;

    await send(update.message.chat.id, text);

    return res.status(200).json({ ok: true });
  }

  return res.status(200).json({ ok: true });

  async function send(chatId, text) {
    await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
        disable_web_page_preview: true,
      }),
    });
  }
}
