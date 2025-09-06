# Predefined Message Generator Feature

## 📌 Description
This is a simple feature built for the **Wotnot WhatsApp CRM tool**.  
It allows users to enter a **prompt** (like `diwali`, `payment reminder`) and generates a **predefined template message** that can be further tweaked before sending.

---

## 🚀 How It Works
1. User enters a short prompt (example: `diwali`).
2. The system checks against predefined templates stored in code.
3. A message is generated (example:  
   `Hello {name}, Diwali greetings! We wish you the best holiday. Namaste!`)
4. The message appears in a text box where the user can edit before sending.

---

## 🛠️ Example Prompts
- **diwali** → `Hello {name}, Diwali greetings! We wish you the best holiday. Namaste!`
- **payment reminder** → `Hello {name}, this is a gentle reminder about your pending payment of {amount}.`
- **new year** → `Happy New Year {name}! Wishing you success and happiness ahead.`

---

## ⚡ Usage
- Copy the `MessageGenerator.js` component into your React project.
- Import it and render `<MessageGenerator />` inside your app.
- Enter a prompt (like `diwali`) and click **Generate** to get a message.

---

## 📂 Repo Structure
message-generator-feature/
│── package.json
│── README.md
│── public/
│   ├── index.html
│   └── favicon.ico
│
└── src/
    │── index.js
    │── App.js
    │── MessageGenerator.js
