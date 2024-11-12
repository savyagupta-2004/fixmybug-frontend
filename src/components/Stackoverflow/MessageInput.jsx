import React, { useState } from "react";

const MessageInput = ({ sendMessage }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim()) {
      sendMessage(text);
      setText("");
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Type your message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 p-2 border rounded mr-2"
      />
      <button
        onClick={handleSend}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
