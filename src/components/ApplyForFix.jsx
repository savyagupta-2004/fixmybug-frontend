import React from "react";
import { FaBug, FaBriefcase, FaComments, FaBlog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ApplyForFix = () => {
  const navigate = useNavigate();
  const handlenavigatefix = () => {
    navigate("/RequestFix");
  };
  const handlenavigatesign = () => {
    navigate("/signup-partTime");
  };
  const handlenavigatesign1 = () => {
    navigate("/contact-us");
  };
  const handlenavigatesblog = () => {
    navigate("/blog");
  };
  return (
    <section className="mt-20 w-fit mx-auto mb-20 px-20 bg-gradient-to-r from-gray-100 to-blue-50 py-12 ">
      <div className="container mx-auto text-center text-gray-800">
        {/* Header */}
        <h2 className="text-4xl font-bold mb-6">Apply for a Fix</h2>
        <p className="text-lg mb-10">
          Whether you're looking to get bugs fixed or want to join our team of
          expert bug-fixers, you're in the right place!
        </p>

        {/* Options Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Request a Bug Fix */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
            <FaBug className="text-blue-500 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Request a Fix</h3>
            <p className="text-gray-600 mb-4">
              Have a bug that's driving you crazy? Submit your request, and
              we'll get to work!
            </p>
            <button
              onClick={handlenavigatefix}
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-400 transition"
            >
              Request Now
            </button>
          </div>

          {/* Part-Time and Full-Time Employment */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
            <FaBriefcase className="text-green-500 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Join Our Team</h3>
            <p className="text-gray-600 mb-4">
              We're hiring! Apply as a part-time or full-time bug fixer and
              start solving real problems.
            </p>
            <button
              onClick={handlenavigatesign}
              className="bg-green-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-green-400 transition"
            >
              Apply Now
            </button>
          </div>

          {/* Chat & Blog Section */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
            <FaComments className="text-teal-500 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Chat with Us</h3>
            <p className="text-gray-600 mb-4">
              Got questions? Connect with us directly through our chat, or check
              out our blog for the latest tips and updates.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={handlenavigatesign1}
                className="bg-teal-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-teal-400 transition"
              >
                Chat Now
              </button>
              <button
                onClick={handlenavigatesblog}
                className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-full hover:bg-gray-700 transition"
              >
                <FaBlog className="inline-block mr-2" /> Visit Blog
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyForFix;
