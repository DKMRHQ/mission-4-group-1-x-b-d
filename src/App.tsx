// client/src/App.tsx
import { useState, useRef, useEffect } from "react";
import { ChatWindow } from "./components/ChatWindow";
import type { Message } from "./components/ChatWindow";
import { InputBox } from "./components/InputBox";
import "./index.css";

export default function App() {
  const [history, setHistory] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const bottom = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);

  const send = async () => {
    if (!input.trim()) return;

    // 1) add the user's message to history
    const userMsg: Message = { from: "you", text: input };
    const newHistory = [...history, userMsg];
    setHistory(newHistory);
    setInput("");

    // 2) POST full history + current message
    try {
      const res = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ history: newHistory, message: input }),
      });
      if (!res.ok) {
        throw new Error("Server returned an error status.");
      }
      const { reply } = await res.json();
      setHistory([...newHistory, { from: "Tina", text: reply }]);
    } catch (e) {
      console.error("Tina hit an error:", e);
      setHistory([...newHistory, { from: "Tina", text: "Tina hit an error." }]);
    }
  };

  useEffect(() => {
    bottom.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div className="container">
      <ChatWindow messages={history} bottomRef={bottom} />
      <InputBox value={input} onChange={setInput} onSend={send} />
      <div ref={bottom} />
    </div>
  );
}
