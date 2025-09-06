import React, { useState } from "react";

const messages = [
  "Hello {name}, Diwali greetings! We wish you the best holiday. Namaste!",
  "Have a great day! 🌞",
  "Stay positive ✨",
  "Hello {name}, thank you for being with us!",
  "Best wishes from our team 🙌"
];

function MessageGenerator() {
  const [message, setMessage] = useState("");

  const generateMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
  };

  return (
    <div>
      <button onClick={generateMessage} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Generate Message
      </button>
      <p style={{ marginTop: "20px", fontSize: "18px" }}>{message}</p>
    </div>
  );
}

export default MessageGenerator;
