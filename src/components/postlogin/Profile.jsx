import React, { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
// Simplified ()=>{notify function to show one common message
function ProfileCard(props) {
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
  const [isFollowing, setIsFollowing] = useState(false);
  const navigate = useNavigate();
  // Load follow status from local storage on component mount
  useEffect(() => {
    const storedStatus = localStorage.getItem(`followStatus-${props.name}`);
    if (storedStatus === "true") {
      setIsFollowing(true);
    }
  }, [props.name]);

  // Handle Follow button click
  const handleFollowClick = () => {
    const newFollowStatus = !isFollowing;
    setIsFollowing(newFollowStatus);
    localStorage.setItem(
      `followStatus-${props.name}`,
      newFollowStatus.toString()
    );
  };

  // To view personal insights, you have to Hire me as your BugFixer
  const handlenavigate = () => {
    navigate("/chat");
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
    `}</style>

      <div className="flex max-w-3xl mx-auto bg-[#e6e6e6] rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105">
        {/* Left section with the image */}
        <div
          className="w-1/3 bg-cover bg-center"
          style={{
            backgroundImage: `url(${props.image})`,
            minHeight: "200px",
          }}
        ></div>

        {/* Right section with content */}
        <div className="w-2/3 p-6 text-left flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              {props.name}
            </h1>
            <p className="text-sm text-gray-500">{props.city}</p>
            <p className="text-md text-indigo-600 font-medium mt-2">
              {props.role}
            </p>

            <div className="flex mt-4 space-x-4">
              <button
                onClick={handlenavigate}
                className="px-5 py-2 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition"
              >
                Message
              </button>
              <button
                onClick={handleFollowClick}
                className={`px-5 py-2 font-semibold rounded-full transition ${
                  isFollowing
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {isFollowing ? "Following" : "Follow"}
              </button>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex mt-4 space-x-4 text-gray-500">
            <FaLinkedin
              onClick={() => {
                notify(
                  " To view personal insights, you have to Hire me as your BugFixer"
                );
              }}
              className="text-2xl hover:text-blue-600 transition cursor-pointer"
            />
            <FaTwitter
              onClick={() => {
                notify(
                  " To view personal insights, you have to Hire me as your BugFixer"
                );
              }}
              className="text-2xl hover:text-blue-400 transition cursor-pointer"
            />
            <FaGithub
              onClick={() => {
                notify(
                  " To view personal insights, you have to Hire me as your BugFixer"
                );
              }}
              className="text-2xl hover:text-gray-800 transition cursor-pointer"
            />
            <FaYoutube
              onClick={() => {
                notify(
                  " To view personal insights, you have to Hire me as your BugFixer"
                );
              }}
              className="text-2xl hover:text-red-500 transition cursor-pointer"
            />
            <FaInstagram
              onClick={() => {
                notify(
                  " To view personal insights, you have to Hire me as your BugFixer"
                );
              }}
              className="text-2xl hover:text-pink-500 transition cursor-pointer"
            />
          </div>

          {/* Experience Section */}
          <div className="mt-6 bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Experience
            </h2>
            <p className="text-sm text-gray-600">{props.experience}</p>
          </div>
        </div>
      </div>

      {/* Container to display notifications */}
      <ToastContainer />
    </>
  );
}

export default ProfileCard;
