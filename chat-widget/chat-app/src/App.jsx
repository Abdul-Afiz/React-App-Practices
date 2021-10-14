import { useState } from "react";
import "./index.scss";

function App() {
  const [messages, setMesages] = useState([]);
  const [reply, setReply] = useState("");

  const handleSumit = (e) => {
    e.preventDefault();

    setMesages(messages.concat(reply));
    setReply("");
  };

  return (
    <div className="App">
      <header>Chat Widget</header>

      <div className="container">
        <p className="admin">how can we help you?</p>

        {messages.map((message, messageIndex) => (
          <p key={messageIndex} className="client">
            {message}
          </p>
        ))}
      </div>

      <form onSubmit={handleSumit} className="input-field">
        <input
          type="text"
          placeholder="Enter your text here"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
        />
        <button type="submit"> Send</button>
      </form>
    </div>
  );
}

export default App;
