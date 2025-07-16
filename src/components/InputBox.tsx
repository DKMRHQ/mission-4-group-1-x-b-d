// client/src/components/InputBox.tsx

export function InputBox({
  value,
  onChange,
  onSend,
}: {
  value: string;
  onChange: (v: string) => void;
  onSend: () => void;
}) {
  return (
    <div className="input-box">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSend()}
        placeholder="Type your message…"
      />
      <button onClick={onSend}>Send</button>
    </div>
  );
}
