import React from "react";

const MessageList = ({ messages }) => {
  return (
    <div className="mb-4 h-64 overflow-scroll w-[50rem] bg-gray-200 p-4 rounded">
      {messages.map((msg, index) => (
        <div key={index} className="mb-2">
          <strong>{msg.sender}: </strong>
          <span>{msg.text}</span>
          <div className="text-xs text-gray-500">
            {new Date(msg.timestamp).toLocaleTimeString()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
