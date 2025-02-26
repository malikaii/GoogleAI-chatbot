import { useState } from "react";
import chatbotImg from "/assets/chatbot.png";
import "./App.css";
import Chat from "./Components/Chat/Chat";
import Controls from "./Components/Controls/Controls";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Loader from "./Components/Loader/Loader";
import { Assistant } from "./Components/assistants/googleai";

function App() {
  const assistant = new Assistant();
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  function addMessage(message) {
    setMessages((prevMessage) => [...prevMessage, message]);
    
  }

  async function handleContentSend(content) {
    addMessage({content, role: "user"})
    setIsLoading(true)
    try {
      const result = await assistant.chat(content) 
      addMessage({content: result, role: "assistant"})

    } catch ({message}) {
      console.log(message);
      addMessage({ content: "Sorry, couldn't process your request. Please try again.", role: "system" });
      
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className="App">
        {isLoading && <Loader/>}
        <header className="Header">
          <img className="Logo" src={chatbotImg} alt="chatbot-image" />
          <h2 className="Title">AI Chatbot</h2>
        </header>
        <div className="ChatContainer">
          <Chat messages={messages} />
        </div>
        <Controls isDisabled={isLoading} onSend={handleContentSend} />
      </div>
    </>
  );
}

export default App;
