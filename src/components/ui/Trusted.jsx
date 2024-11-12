import React, { useState, useEffect } from "react";

const Trusted = () => {
  const [hoveredCircle, setHoveredCircle] = useState(null);
  const [progress, setProgress] = useState(0);

  const modalText = {
    bug: "Encountered a bug? We're here to help fix it!",
    fix: "Submit your application, and we'll take care of the rest.",
    select: "Choose from our list of experts to fix your bug.",
    ready: "All set! Enjoy your bug-free experience.",
  };

  const getModalPosition = () => {
    switch (hoveredCircle) {
      case "bug":
        return { top: "35%", left: "30%" };
      case "fix":
        return { top: "25%", left: "40%" };
      case "select":
        return { top: "35%", left: "60%" };
      case "ready":
        return { top: "35%", left: "70%" };
      default:
        return { top: "50%", left: "50%" };
    }
  };

  useEffect(() => {
    let interval;
    const animateProgress = () => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return prevProgress;
        }
        return Math.min(prevProgress + 0.5, 100);
      });
    };

    interval = setInterval(animateProgress, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-6 sm:mt-10 mb-4 sm:mb-6">
        Getting started is
        <span className="text-[#0c4a6e]"> Quick </span> and
        <span className="text-[#0c4a6e]"> Easy </span>
      </h2>
      <div className="flex flex-col items-center mx-auto py-10 sm:py-20 border border-black bg-[#b3cfcf] relative w-full sm:w-auto">
        <div className="relative flex flex-wrap justify-center items-center gap-4 sm:gap-8 w-full max-w-4xl sm:space-x-8">
          <div
            className="absolute lg:left-[25%] md:left-[20%] sm:w-[28rem] lg:w-[30rem] md:w-[31rem] h-[5px] bg-[#b3cfcf] overflow-hidden"
            style={{ top: "30%", transform: "translateY(-50%)" }}
          >
            <div
              className="h-full bg-[#0c4a6e] animate-growing-line"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="flex flex-col items-center text-center z-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg mb-2">
              <i className="fas fa-bug text-white text-xl sm:text-2xl"></i>
            </div>
            <p
              className="text-black font-medium text-xs sm:text-base"
              onMouseEnter={() => setHoveredCircle("bug")}
              onMouseLeave={() => setHoveredCircle(null)}
            >
              Stuck with
              <br />a Bug?
            </p>
          </div>

          <div className="flex flex-col items-center text-center z-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-green-600 shadow-lg mb-2">
              <i className="fas fa-tools text-white text-xl sm:text-2xl"></i>
            </div>
            <p
              className="text-black font-medium text-xs sm:text-base"
              onMouseEnter={() => setHoveredCircle("fix")}
              onMouseLeave={() => setHoveredCircle(null)}
            >
              Apply
              <br />
              for a Fix
            </p>
          </div>

          <div className="flex flex-col items-center text-center z-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg mb-2">
              <i className="fas fa-user-check text-white text-xl sm:text-2xl"></i>
            </div>
            <p
              className="text-black font-medium text-xs sm:text-base"
              onMouseEnter={() => setHoveredCircle("select")}
              onMouseLeave={() => setHoveredCircle(null)}
            >
              Select your
              <br /> own BugFixer
            </p>
          </div>

          <div className="flex flex-col items-center text-center z-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-purple-600 shadow-lg mb-2">
              <i className="fas fa-check-circle text-white text-xl sm:text-2xl"></i>
            </div>
            <p
              className="text-black font-medium text-xs sm:text-base"
              onMouseEnter={() => setHoveredCircle("ready")}
              onMouseLeave={() => setHoveredCircle(null)}
            >
              That's It
              <br /> Ready to go!
            </p>
          </div>
        </div>

        {hoveredCircle && (
          <div
            className="absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 sm:w-64 bg-white text-center p-2 sm:p-4 rounded-lg shadow-lg"
            style={{
              ...getModalPosition(),
              zIndex: 100,
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <p className="text-black text-sm sm:text-lg">
              {modalText[hoveredCircle]}
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        .animate-growing-line {
          transition: width 0.1s ease-out;
        }
      `}</style>
    </>
  );
};

export default Trusted;
