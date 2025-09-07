import React, { useState } from "react";

function MessageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);

  const handleGenerate = () => {
    if (prompt.trim() === "") return;

    const newMessages = [
      `Hello {name}, ${prompt}! We wish you the best holiday.`,
      `Hi {name}, ${prompt}! Stay happy and healthy.`,
      `Greetings {name}, ${prompt}! Best wishes from our team.`,
      `Dear {name}, ${prompt}! Enjoy your time with family and friends.`,
    ];

    setMessages(newMessages);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Message Generator</h1>
      <input
        type="text"
        placeholder="Enter your prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button onClick={handleGenerate} style={{ padding: "8px 16px" }}>
        Generate
      </button>

      <div style={{ marginTop: "20px" }}>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
    </div>
  );
}

export default MessageGenerator;
