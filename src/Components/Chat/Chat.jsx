import React from "react";
import "./Chat.css";

const WELCOME_MESSAGE = {
    role: "assistant",
    content: "Hello! How can I assist you right now?"
  }


function Chat({ messages }) {

  
  return (
    <div className="Chat">
      {[WELCOME_MESSAGE, ...messages].map(({ role, content }, index) => (
        <div className="Message" key={index} data-role={role}>
          {content}
        </div>
      ))}
    </div>
  );
}

export default Chat;
