import { useState } from "react";
import chatbotImg from "../public/assets/chat-bot.png";
import "./App.css";
import Chat from "./Components/Chat/Chat";
import Controls from "./Components/Controls/Controls";

const MESSAGES = [
  {
    role: "user",
    content: "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate velit in eros mattis lacinia. In eget tempus lacus, a elementum mi. Fusce et molestie metus. Vivamus mauris nisl, venenatis sed sem pulvinar, tristique sollicitudin dolor. Pellentesque nisl mauris, ultricies in sollicitudin a, placerat a nibh. Suspendisse potenti. Nulla ullamcorper dictum lacus, eu iaculis mauris mollis ut.",
  },
  {
    role: "assistant",
    content: "2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate velit in eros mattis lacinia. In eget tempus lacus, a elementum mi. Fusce et molestie metus. Vivamus mauris nisl, venenatis sed sem pulvinar, tristique sollicitudin dolor. Pellentesque nisl mauris, ultricies in sollicitudin a, placerat a nibh. Suspendisse potenti. Nulla ullamcorper dictum lacus, eu iaculis mauris mollis ut.",
  },
  {
    role: "user",
    content: "3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate velit in eros mattis lacinia. In eget tempus lacus, a elementum mi. Fusce et molestie metus. Vivamus mauris nisl, venenatis sed sem pulvinar, tristique sollicitudin dolor. Pellentesque nisl mauris, ultricies in sollicitudin a, placerat a nibh. Suspendisse potenti. Nulla ullamcorper dictum lacus, eu iaculis mauris mollis ut.",
  },
  {
    role: "assistant",
    content: "4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate velit in eros mattis lacinia. In eget tempus lacus, a elementum mi. Fusce et molestie metus. Vivamus mauris nisl, venenatis sed sem pulvinar, tristique sollicitudin dolor. Pellentesque nisl mauris, ultricies in sollicitudin a, placerat a nibh. Suspendisse potenti. Nulla ullamcorper dictum lacus, eu iaculis mauris mollis ut.",
  },
];
function App() {
  const [messages, setMessages] = useState(MESSAGES);
  return (
    <>
      <div className="App">
        <header className="Header">
          <img className="Logo" src={chatbotImg} alt="chatbot-image" />
          <h2 className="Title">AI Chatbot</h2>
        </header>
        <div className="ChatContainer">
          <Chat messages={messages}/> 
        </div>
        <Controls/>
      </div>
    </>
  );
}

export default App;
