import { useState } from "react";
import chatbotImg from "../public/assets/chat-bot.png";
import "./App.css";
import Chat from "./Components/Chat/Chat";
import Controls from "./Components/Controls/Controls";
import { GoogleGenerativeAI } from "@google/generative-ai";

const googleAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_API_KEY);
const gemini = googleAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const chat = gemini.startChat({ history: [] });



function App() {
  const [messages, setMessages] = useState([]);

  function addMessage(message) {
    setMessages((prevMessage) => [...prevMessage, message]);
    
  }

  async function handleContentSend(content) {
    addMessage({content, role: "user"})
    try {
      const result = await chat.sendMessage(content) 
      addMessage({content: result.response.text(), role: "assistant"})

    } catch ({message}) {
      console.log(message);
      addMessage({ content: "Sorry, couldn't process your request. Please try again.", role: "system" });
      
    }
  }

  return (
    <>
      <div className="App">
        <header className="Header">
          <img className="Logo" src={chatbotImg} alt="chatbot-image" />
          <h2 className="Title">AI Chatbot</h2>
        </header>
        <div className="ChatContainer">
          <Chat messages={messages} />
        </div>
        <Controls onSend={handleContentSend} />
      </div>
    </>
  );
}

export default App;
