// client/src/components/ChatWindow.tsx
import type { RefObject } from 'react';

export interface Message {
  from: 'you' | 'Tina';
  text: string;
}

export function ChatWindow({
  messages,
  bottomRef,
}: {
  messages: Message[];
  bottomRef: RefObject<HTMLDivElement>;
}) {
  return (
    <div className="chat-window">
      {messages.map((m, i) => (
        <div key={i} className={`msg ${m.from}`}>
          <span className="label">{m.from === 'you' ? 'You:' : 'Tina:'}</span>
          <span className="text">{m.text}</span>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
