import React from "react";

const ChatBotExplanation = () => {
  return (
    <section className="bg-white  shadow-lg rounded-lg p-8 mb-8 border border-gray-300 ">
      <h2 className="text-3xl font-bold  mb-6 text-[#0c4a6e]">
        Welcome to BugFixer Chat
      </h2>
      <p className="text-lg text-[#0c4a6e] mb-4">
        BugFixer Chat is a collaborative platform designed to connect developers
        worldwide, fostering a community-driven approach to solving complex
        coding challenges.
      </p>

      <h3 className="text-2xl font-bold text-[#0c4a6e] mb-4">How It Works</h3>
      <ul className="list-disc pl-8 mb-6 text-gray-700">
        <li>Choose a topic from our list of popular programming subjects.</li>
        <li>Enter your name and email address to join the chat room.</li>
        <li>Read and agree to our conduct guidelines.</li>
        <li>Click "Join Room" to enter the selected topic's chat room.</li>
      </ul>

      <h3 className="text-2xl font-bold text-[#0c4a6e] mb-4">Key Features</h3>
      <ul className="list-disc pl-8 mb-6 text-gray-700">
        <li>
          Real-time messaging with other participants in the chosen topic.
        </li>
        <li>
          Send and receive messages related to the selected programming subject.
        </li>
        <li>Clear history of all messages within the chat room.</li>
        <li>
          Option to exit the current room and join another topic at any time.
        </li>
      </ul>

      <h3 className="text-2xl font-bold text-[#0c4a6e] mt-8 mb-4">
        Conduct Guidelines
      </h3>
      <p className="text-lg text-gray-700 text-center mb-4">
        We encourage open discussion and collaboration. Please maintain a
        respectful and constructive dialogue, focusing on problem-solving and
        knowledge sharing.
      </p>

      {/* <div className="flex justify-center mt-6">
        <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div> */}
    </section>
  );
};

export default ChatBotExplanation;
