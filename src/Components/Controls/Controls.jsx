import React, { useEffect, useRef, useState } from "react";

import "./Controls.css";
function SendIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#5f6368"
    >
      <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
    </svg>
  );
}
function Controls({ isDisabled = false, onSend }) {
  const [content, setContent] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (!isDisabled) {
      textareaRef.current.focus();
    }
  }, [isDisabled]);

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function handleContentSend() {
    if (content.length > 0) {
      onSend(content);
      setContent("");
    }
  }

  function handleEnterPress(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleContentSend();
    }
  }

  return (
    <div className="Controls">
      <div className="TextAreaContainer">
        <textarea
          ref={textareaRef}
          className="TextArea"
          placeholder="Message Chatbot"
          name=""
          id=""
          value={content}
          onChange={handleContentChange}
          onKeyDown={handleEnterPress}
        >
          {" "}
        </textarea>
      </div>
      <button
        className="Button"
        disabled={isDisabled}
        onClick={handleContentSend}
      >
        <SendIcon />
      </button>
    </div>
  );
}

export default Controls;
