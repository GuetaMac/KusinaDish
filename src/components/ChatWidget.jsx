import { useEffect, useRef, useState } from "react";
import { recipes } from "../data/recipes";

function buildContext() {
  return recipes
    .map((r) => {
      const ingredientsText = r.ingredients
        .map((i) => {
          const amount = i.amount
            ? `${i.amount} ${i.unit}`.trim()
            : "ayon sa panlasa";
          const note = i.note ? ` (${i.note})` : "";
          return `- ${i.name}: ${amount}${note}`;
        })
        .join("\n");

      const stepsText = r.steps
        .map((s, idx) => `${idx + 1}. ${s.title} ${s.text}`)
        .join("\n");

      return `### ${r.title} (${r.category}, ${r.difficulty}, ~${r.cookTime} min, ${r.servings} servings)\n${r.description}\n\nSangkap:\n${ingredientsText}\n\nSteps:\n${stepsText}`;
    })
    .join("\n\n---\n\n");
}

// Built once per page load — recipes.js doesn't change at runtime.
const CONTEXT = buildContext();

function ChatIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 5.5h16a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1H9l-4.5 4V16H4a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1Z" />
      <path d="M8 10h8M8 13h5" />
    </svg>
  );
}

function CloseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]); // { role: "user"|"model", text }
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, sending, open]);

  async function handleSend(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text || sending) return;

    const nextMessages = [...messages, { role: "user", text }];
    setMessages(nextMessages);
    setInput("");
    setSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: messages,
          context: CONTEXT,
        }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "model", text: data.reply }]);
    } catch (err) {
      console.error("Chat widget error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "model", text: "Sorry bebe, may error — subukan mo ulit." },
      ]);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[min(560px,calc(100vh-120px))] w-[min(400px,calc(100vw-32px))] flex-col overflow-hidden rounded-3xl border-2 border-toyo/15 bg-papel shadow-2xl">
          <div className="flex items-center justify-between border-b-2 border-toyo/10 bg-dahon px-5 py-4">
            <div>
              <p className="font-display text-lg font-extrabold text-papel">
                Tanong kay Bebe 🍳
              </p>
              <p className="text-xs text-papel/80">
                Tungkol sa mga luto sa Kusina
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Isara ang chat"
              className="rounded-full p-1.5 text-papel/90 transition hover:bg-papel/15"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.length === 0 && (
              <p className="rounded-2xl bg-toyo/5 p-4 text-sm leading-relaxed text-toyo/80">
                Hi bebe! Magtanong ka tungkol sa mga recipe dito, o kung may
                kulang kang sangkap — hal. "wala akong palapot para sa
                caldereta, ano gagawin ko?"
              </p>
            )}

            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[88%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-[0.92rem] leading-relaxed ${
                    m.role === "user"
                      ? "bg-dahon text-papel"
                      : "border border-toyo/10 bg-toyo/5 text-toyo"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {sending && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl border border-toyo/10 bg-toyo/5 px-4 py-2.5 text-sm text-toyo/60">
                  Nag-iisip pa si bebe...
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          <form
            onSubmit={handleSend}
            className="flex gap-2 border-t-2 border-toyo/10 p-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Magtanong ka, bebe..."
              disabled={sending}
              className="flex-1 rounded-full border border-toyo/15 bg-papel px-4 py-2.5 text-sm text-toyo outline-none placeholder:text-toyo/40 focus:border-dahon"
            />
            <button
              type="submit"
              disabled={sending || !input.trim()}
              className="rounded-full bg-dahon px-5 py-2.5 text-sm font-display font-bold text-papel transition-transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
            >
              Send
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Isara ang chat" : "Magtanong kay bebe"}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-dahon text-papel shadow-xl transition-transform hover:scale-105 active:scale-95"
      >
        {open ? (
          <CloseIcon className="h-6 w-6" />
        ) : (
          <ChatIcon className="h-6 w-6" />
        )}
      </button>
    </>
  );
}
