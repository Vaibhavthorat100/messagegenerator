import React, { useState } from "react";

const templates = {
  diwali: "Hello {name}, Diwali greetings! We wish you the best holiday. Namaste!",
  "payment reminder": "Hello {name}, this is a gentle reminder about your pending payment of {amount}.",
  "new year": "Happy New Year {name}! Wishing you success and happiness ahead."
};

function MessageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [message, setMessage] = useState("");

  const generateMessage = () => {
    const key = prompt.toLowerCase();
    if (templates[key]) {
      setMessage(templates[key]);
    } else {
      setMessage("Hello {name}, thank you for staying connected with us!");
    }
  };

  return (
    <div>
      <h2>Predefined Message Generator</h2>
      <input
        type="text"
        placeholder="Enter prompt e.g. diwali"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={generateMessage}>Generate</button>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows="4"
        cols="50"
      />
    </div>
  );
}

export default MessageGenerator;
