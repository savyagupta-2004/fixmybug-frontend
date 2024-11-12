import React, { useState, useRef, useEffect } from "react";
import Signupform1 from "./Signupform1";
import Signupform2 from "./Signupform2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
const CurtainOverlay = ({ onClose }) => {
  const curtainRef = useRef(null);

  useEffect(() => {
    if (curtainRef.current) {
      curtainRef.current.style.height = "100vh";
    }
  }, []);

  const handleOptionClick = (type) => {
    if (curtainRef.current) {
      curtainRef.current.style.height = "0"; // Start the curtain closing animation
    }
    setTimeout(() => onClose(type), 300); // Wait for animation to finish (300ms)
  };

  return (
    <>
      <div
        ref={curtainRef}
        className="fixed inset-x-0  flex-col items-center justify-center transition-height duration-300 ease-in-out overflow-hidden bg-cover"
      >
        <Navbar></Navbar>
        {/* Blurred Background */}
        <div className=" mt-40" />

        {/* Main Content */}
        <div className="relative z-10 bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl mx-auto overflow-hidden">
          <h2 className="text-2xl font-bold mb-6 text-center">
            So, What's it going to be?
          </h2>

          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-6 text-center bg-blue-50 rounded-lg transition-all duration-300 hover:bg-blue-100">
              <button
                onClick={() => handleOptionClick("form1")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-2"
              >
                Part-time BugFixer
              </button>
              <img src="../Images/boythinking.webp"></img>

              {/* <p className="mt-2 text-sm text-gray-600">
              The Part-Time Bug Fixer position offers flexible working hours and
              a variety of benefits, including skill development, competitive
              earnings, and performance bonuses. Employees enjoy networking
              opportunities, project flexibility, and access to exclusive
              events. This role emphasizes work-life balance and provides
              feedback and recognition, making it an attractive choice for those
              seeking growth in a supportive environment.
            </p> */}
            </div>

            <div className="w-full md:w-1/2 p-6 text-center bg-green-50 rounded-lg transition-all duration-300 hover:bg-green-100">
              <button
                onClick={() => handleOptionClick("form2")}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full mb-2"
              >
                Full-time BugFixer
              </button>
              <img src="../Images/girlthinking.webp" className=""></img>
              {/* <p className="mt-2 text-sm text-gray-600">
              The Full-Time Bug Fixer role provides a performance-based stipend
              and career advancement opportunities, along with exclusive
              training and networking with industry leaders. Employees benefit
              from a competitive salary, project leadership opportunities, and
              access to advanced technology. A collaborative work environment
              and flexible hours enhance job satisfaction, while candidates must
              meet specific application requirements to be considered.
            </p> */}
            </div>
          </div>
        </div>
        {/* <Footer></Footer> */}
      </div>
    </>
  );
};

const SignupPage = () => {
  const [showCurtain, setShowCurtain] = useState(true);
  const [selectedForm, setSelectedForm] = useState(null);
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

  const handleCloseCurtain = (formType) => {
    setShowCurtain(false);
    setSelectedForm(formType);
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
      {showCurtain && <CurtainOverlay onClose={handleCloseCurtain} />}

      {!showCurtain && selectedForm === "form1" && (
        <Signupform1 notify={notify} />
      )}
      {!showCurtain && selectedForm === "form2" && (
        <Signupform2 notify={notify} />
      )}
    </>
  );
};

export default SignupPage;
