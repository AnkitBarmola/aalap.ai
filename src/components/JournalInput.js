export default function JournalInput({ value, onChange }) {
  return (
    <textarea
      placeholder="Write how you feel..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={6}
      style={{ width: "100%", padding: "10px" }}
    />
  );
}
