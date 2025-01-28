import React from "react";
import "./Chat.css";
import Markdown from "react-markdown";

const WELCOME_MESSAGE = {
    role: "assistant",
    content: "Hello! How can I assist you right now?"
  }


function Chat({ messages }) {

  
  return (
    <div className="Chat">
      {[WELCOME_MESSAGE, ...messages].map(({ role, content }, index) => (
        <div className="Message" key={index} data-role={role}>
         <Markdown>{content}</Markdown> 
        </div>
      ))}
    </div>
  );
}

export default Chat;
