import React from "react";
import "./Chat.css";


function Chat({ messages }) {
  return (
    <div className="Chat">
      {messages.map(({ role, content }, index) => (
        <div className="Message" key={index} data-role={role}>
          {content}
        </div>
      ))}
    </div>
  );
}

export default Chat;
