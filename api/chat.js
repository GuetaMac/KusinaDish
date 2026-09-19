// Vercel serverless function — /api/chat
//
// Set GEMINI_API_KEY as an env var in this Vercel project's settings
// (NOT prefixed with VITE_, so it stays server-only and never reaches the
// browser). Get a free key at https://aistudio.google.com/apikey
//
// This is a SEPARATE Vercel project from your other apps (Our Little World,
// portfolio), so you need to add GEMINI_API_KEY here too even if you
// already set it elsewhere — can reuse the same key value if you want.

const MODEL = "gemini-3.1-flash-lite"; // current stable free-tier model (Sept 2026)
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

const SYSTEM_PROMPT = `Ikaw ang "Kusina" cooking assistant — yung parehong palambing, palakaibigang "bebe" narrator na gumagabay sa mga tao sa mga recipes sa app na ito, ngayon nasa chat form ka.

Panuntunan:
- KAPAG malinaw na tumutukoy ang tanong sa isang partikular na recipe na nasa CONTEXT (binanggit ang pangalan ng dish, o malinaw sa usapan kung anong recipe ang pinag-uusapan) — kahit troubleshooting lang ang tanong (hal. "kulang lasa ko sa spaghetti ko", "matigas yung karne ko"), UNAHIN mong tingnan ang eksaktong listahan ng sangkap at steps ng recipe na iyon mula sa CONTEXT. Ibase ang suggestion mo sa mga sangkap na TALAGANG nasa recipe na iyon (hal. "dagdagan mo ng konting condensed milk o Knorr Beef Cube na parte na ng recipe mo" — hindi basta mag-suggest ng sangkap na wala sa listahan). Huwag kang mag-iimbento o magbanggit ng sangkap na hindi bahagi ng recipe na iyon sa CONTEXT, maliban kung malinaw mong sasabihing "bagong idea 'to na wala sa recipe mo" bago mo imungkahi.
- Para sa mga general cooking questions na WALANG partikular na recipe na tinutukoy mula sa CONTEXT — tulad ng general substitutions, techniques, o tanong tungkol sa dish na wala talaga sa CONTEXT — saka mo lang gamitin ang sarili mong malawak na kaalaman sa Filipino at general cooking. Hindi ka dapat sumagot ng "hindi ko alam" kung common cooking knowledge lang naman ang tinatanong.
- Manatili sa parehong "bebe" na tono — mapagmahal, casual, parang taong tunay na kasama mo sa kusina, gaya ng estilo sa mga recipe steps sa CONTEXT. Tumawag ng "bebe" paminsan-minsan, gamit ang parehong Taglish na estilo.
- Panatilihing maikli at praktikal ang mga sagot — 3 hanggang 5 pangungusap lang kadalasan, parang chat lang, hindi essay. Huwag gumamit ng listahan/bullet points o numbered steps maliban kung talagang hinihiling ng user ng buong step-by-step na paliwanag.
- HUWAG gumamit ng Markdown formatting — walang asterisks (double-asterisk para sa bold), walang bullet dashes, walang pound-sign headers. Plain conversational text lang, parang tunay na nakikipag-usap, dahil hindi ito rine-render bilang formatted text.
- Kung tinatanong ka ng recipe na wala talaga sa CONTEXT, sabihin mo nang tapat na wala pa yun sa mga recipe ng app, pero pwede ka pa ring magbigay ng general advice tungkol dun kung alam mo naman sa pangkalahatan.`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res
      .status(500)
      .json({ error: "GEMINI_API_KEY is not configured on the server." });
    return;
  }

  const { message, history, context } = req.body || {};

  if (!message || typeof message !== "string") {
    res
      .status(400)
      .json({ error: "Missing 'message' string in request body." });
    return;
  }

  const priorTurns = Array.isArray(history)
    ? history.map((turn) => ({
        role: turn.role === "model" ? "model" : "user",
        parts: [{ text: String(turn.text || "") }],
      }))
    : [];

  const contents = [
    ...priorTurns,
    { role: "user", parts: [{ text: message }] },
  ];

  const systemInstructionText = context
    ? `${SYSTEM_PROMPT}\n\n## CONTEXT (mga recipe ng app)\n\n${context}`
    : SYSTEM_PROMPT;

  try {
    const geminiRes = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemInstructionText }] },
        contents,
        generationConfig: {
          temperature: 0.85,
          maxOutputTokens: 350,
        },
      }),
    });

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      console.error("Gemini API error:", geminiRes.status, errText);
      res.status(502).json({ error: "Gemini API request failed." });
      return;
    }

    const data = await geminiRes.json();
    const reply =
      data?.candidates?.[0]?.content?.parts
        ?.map((p) => p.text || "")
        .join("") || "Sorry bebe, wala akong masabi ngayon — subukan mo ulit.";

    res.status(200).json({ reply });
  } catch (err) {
    console.error("Chat function error:", err);
    res.status(500).json({ error: "Something went wrong on the server." });
  }
}
