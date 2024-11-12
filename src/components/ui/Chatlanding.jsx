import React from "react";
import { useNavigate } from "react-router-dom";

const FixMyBugComponent = () => {
  const naviagte = useNavigate();
  const handlenaviaget = () => {
    naviagte("/chat");
  };
  return (
    <>
      <section className=" bg-white w-fit mx-auto rounded-lg p-8 mb-20 bg-cover bg-center">
        <h2 className="text-5xl font-bold text-center mt-5 mb-5">
          Secure <span className="text-[#0c4a6e]"> Bug Fixing </span>Solutions
        </h2>
        <p className="text-xl text-center text-gray-700 mb-8">
          At FixMyBug, we prioritize your privacy and security while providing
          top-notch bug fixing services.
        </p>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {/* One-on-one communication */}
            <div className="bg-[#E6E6E6] shadow-md rounded-lg p-6 w-full md:w-1/3">
              <h3 className="text-2xl font-semibold text-center mb-4">
                Personalized Support
              </h3>
              <p className="mb-4 text-center">
                Direct communication with experienced bug fixers tailored to
                your needs.
              </p>
              {/* <div className="flex justify-center">
                <button className="bg-blue-600   hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Start Private Chat
                </button>
              </div> */}
            </div>

            {/* Common rooms */}
            <div className="bg-[#E6E6E6] shadow-md rounded-lg p-6 w-full md:w-1/3">
              <h3 className="text-2xl font-semibold text-center mb-4">
                Community Rooms
              </h3>
              <p className="mb-4 text-center">
                Join public chat rooms where experts from around the world
                collaborate to solve complex bugs.
              </p>
              {/* <div className="flex justify-center">
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Enter Community Room
                </button>
              </div> */}
            </div>

            {/* Privacy assurance */}
            <div className="bg-[#E6E6E6] shadow-md rounded-lg p-6 w-full md:w-1/3">
              <h3 className="text-2xl font-semibold text-center mb-4">
                Your Data, Our Priority
              </h3>
              <ul className="list-disc pl-8 mb-4">
                <li>End-to-end encryption for secure messaging</li>
                <li>Compliance with GDPR and CCPA regulations</li>
                <li>Regular security audits and updates</li>
              </ul>
              <div className="flex justify-center">
                <button
                  className="bg-[#0c4a6e]  text-white font-bold py-2 px-4 rounded"
                  onClick={handlenaviaget}
                >
                  Try it out!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FixMyBugComponent;
