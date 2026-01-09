import { useState } from "react";
import JournalInput from "./components/JournalInput";


function App() {
  const [text, setText] = useState("");

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto" }}>
      <h1>AALAP.AI</h1>
      <p>Your life, scored like a movie.</p>

      <JournalInput value={text} onChange={setText} />
    </div>
  );
}

export default App;
