import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import ChatBotExplanation from "./ChatBotExplanation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// // Initialize socket
// const socket = io("wss://fixmybug-backend.vercel.app", {
//   transports: ["websocket"], // Force WebSocket transport
//   upgrade: false,
// }); // Replace with your backend URL
// socket.on("connect", () => {
//   console.log("Connected to server", socket.id);
// });

// socket.on("connect_error", (err) => {
//   console.log("Connection error:", err);
// });

// socket.on("message", (message) => {
//   console.log("Received message:", message);
// });

// socket.on("disconnect", () => {
//   console.log("Disconnected from server");
// });

const ChatRoom = () => {
  const bugfixers = [
    { id: "bugfixer1", name: "Savya Gupta" },
    { id: "bugfixer2", name: "Naval Bihani" },
    { id: "bugfixer3", name: "Dhanush Emani" },
    { id: "bugfixer4", name: "Virinchi Edukula" },
  ];
  const topics = [
    "Frontend",
    "Backend",
    "Spring Boot",
    "React",
    "Node.js",
    "General Bugs",
  ];

  const notify = (message, type = "default") => {
    toast(message, {
      type,
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "custom-toast",
    });
  };

  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedBugfixer, setSelectedBugfixer] = useState(""); // State for selected bugfixer
  const [user, setUser] = useState("");
  const [email, setEmail] = useState(""); // State for email
  const [consent, setConsent] = useState(false); // State for consent checkbox
  const [messages, setMessages] = useState([]);
  const [inRoom, setInRoom] = useState(false); // Track if user is in a room
  const [inPrivateRoom, setInPrivateRoom] = useState(false); // Track if user is in a private room
  const [currentTab, setCurrentTab] = useState("group"); // State to toggle between Group and Private Chat
  const [canEdit, setCanEdit] = useState(true); // New state to manage if the user can edit

  // useEffect(() => {
  //   // Listen for messages from the server
  //   socket.on("message", (message) => {
  //     setMessages((prevMessages) => [...prevMessages, message]);
  //   });

  //   // Listen for previous messages when joining a room
  //   socket.on("previousMessages", (previousMessages) => {
  //     setMessages(previousMessages); // Set previous messages
  //   });

  //   // Clean up on unmount
  //   return () => {
  //     socket.off("message");
  //     socket.off("previousMessages"); // Clean up previous messages listener
  //   };
  // }, []);

  const joinRoom = () => {
    if (selectedTopic && user && email && consent && currentTab === "group") {
      socket.emit("joinRoom", { roomId: selectedTopic, user }, (ack) => {
        if (ack) {
          console.log("Joined room successfully!");
          setInRoom(true); // Set inRoom to true when user joins
          setCanEdit(false); // Disable editing once in a room
        } else {
          console.error("Failed to join room.");
        }
      });
    } else if (
      selectedBugfixer &&
      user &&
      email &&
      consent &&
      currentTab === "private"
    ) {
      // Create a private room between the user and the selected bugfixer
      const roomId = `${user}-${selectedBugfixer}`;
      socket.emit("joinRoom", { roomId, user }, (ack) => {
        if (ack) {
          console.log("Joined private room successfully!");
          setInPrivateRoom(true); // User is in private room
          setCanEdit(false); // Disable editing once in a private room
        } else {
          console.error("Failed to join private room.");
        }
      });
    } else {
      notify("Please complete all fields and select a valid option.");
    }
  };

  const exitRoom = () => {
    if (!inRoom && !inPrivateRoom) return; // Prevent any actions if not in a room

    const roomId =
      currentTab === "private" ? `${user}-${selectedBugfixer}` : selectedTopic;
    socket.emit("leaveRoom", { roomId, user }, (ack) => {
      if (ack) {
        console.log("Left room successfully!");
        setInRoom(false); // Set inRoom to false when user leaves
        setInPrivateRoom(false); // User has exited the private room
        setMessages([]); // Clear messages when exiting the room
        setCanEdit(true); // Re-enable editing when the user exits the chat
        setSelectedTopic(""); // Optionally reset selected topic
        setUser(""); // Optionally reset user name
        setEmail(""); // Optionally reset email
        setConsent(false); // Reset consent checkbox
        setSelectedBugfixer(""); // Reset bugfixer selection
      } else {
        console.error("Failed to leave room.");
      }
    });
  };

  const sendMessage = (text) => {
    const message = {
      roomId:
        currentTab === "private"
          ? `${user}-${selectedBugfixer}`
          : selectedTopic,
      text,
      sender: user,
    };
    socket.emit("message", message);
  };

  return (
    <>
      <style>{`
        .custom-toast {
          background-color: #333;
          color: #fff;
          border-radius: 8px;
        }

        .custom-toast .Toastify__toast--default {
          background-color: #333;
          color: #fff;
        }

        .custom-toast .Toastify__toast--success {
          background-color: #4caf50;
          color: #fff;
        }

        .custom-toast .Toastify__toast--error {
          background-color: #f44336;
          color: #fff;
        }

        .custom-toast .Toastify__close-button {
          color: white;
        }
        
        .tab-button {
          padding: 10px 20px;
          margin: 5px;
          border: none;
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
          background-color: #ddd;
          border-radius: 8px;
        }

      .tab-button.active {
  background-color: #0c4a6e; /* Updated color */
  color: white;
}


        .tab-content {
          margin-top: 20px;
        }
      `}</style>
      <div className="flex flex-col items-center p-8">
        <ChatBotExplanation />
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
          <h1 className="text-3xl font-bold text-center">Chat Room</h1>
          <div className="flex justify-center space-x-4 mt-6">
            <button
              className={`tab-button ${currentTab === "group" ? "active" : ""}`}
              onClick={() => setCurrentTab("group")}
            >
              Group Chat
            </button>
            <button
              className={`tab-button ${
                currentTab === "private" ? "active" : ""
              }`}
              onClick={() => setCurrentTab("private")}
            >
              Private Chat
            </button>
          </div>

          {/* Group Chat Tab */}
          {currentTab === "group" && (
            <div className="tab-content">
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded mb-4"
                disabled={!canEdit} // Disable if canEdit is false
              >
                <option value="">Select a Topic</option>
                {topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>

              <input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded mb-4"
                disabled={!canEdit} // Disable if canEdit is false
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded mb-4"
                disabled={!canEdit} // Disable if canEdit is false
              />

              <label className="flex items-center mb-4">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mr-2"
                  disabled={!canEdit} // Disable if canEdit is false
                />
                <span className="text-gray-700">
                  I agree to maintain decorum in the chat
                </span>
              </label>

              <button
                onClick={joinRoom}
                disabled={!selectedTopic || !user || !email || !consent}
                className={`w-full p-3 rounded mb-2 text-white ${
                  !selectedTopic || !user || !email || !consent
                    ? "bg-gray-400"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                Join Group Chat
              </button>

              {inRoom && (
                <button
                  onClick={exitRoom}
                  className="w-full p-3 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Exit Group Chat
                </button>
              )}
            </div>
          )}

          {/* Private Chat Tab */}
          {currentTab === "private" && (
            <div className="tab-content">
              <select
                value={selectedBugfixer}
                onChange={(e) => setSelectedBugfixer(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded mb-4"
                disabled={!canEdit} // Disable if canEdit is false
              >
                <option value="">Select a Bugfixer</option>
                {bugfixers.map((bugfixer) => (
                  <option key={bugfixer.id} value={bugfixer.id}>
                    {bugfixer.name}
                  </option>
                ))}
              </select>

              <input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded mb-4"
                disabled={!canEdit} // Disable if canEdit is false
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded mb-4"
                disabled={!canEdit} // Disable if canEdit is false
              />

              <label className="flex items-center mb-4">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mr-2"
                  disabled={!canEdit} // Disable if canEdit is false
                />
                <span className="text-gray-700">
                  I agree to maintain decorum in the chat
                </span>
              </label>

              <button
                onClick={joinRoom}
                disabled={!selectedBugfixer || !user || !email || !consent}
                className={`w-full p-3 rounded mb-2 text-white ${
                  !selectedBugfixer || !user || !email || !consent
                    ? "bg-gray-400"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                Join Private Chat
              </button>

              {inPrivateRoom && (
                <button
                  onClick={exitRoom}
                  className="w-full p-3 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Exit Private Chat
                </button>
              )}
            </div>
          )}

          {/* Message list and input components can be conditionally rendered */}
          {(inRoom || inPrivateRoom) && (
            <>
              <MessageList messages={messages} />
              <MessageInput sendMessage={sendMessage} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatRoom;
