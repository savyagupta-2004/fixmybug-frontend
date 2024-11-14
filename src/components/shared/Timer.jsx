import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const deadline = new Date("Jan 08, 2025 21:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center bg-white bg-opacity-90 p-4 rounded-lg shadow-xl w-full sm:w-96 space-x-4">
        {["days", "hours", "minutes", "seconds"].map((unit) => (
          <div
            key={unit}
            className="timer-box p-4 bg-gray-200 rounded-lg shadow-md"
          >
            <p className="text-3xl font-bold text-gray-800">
              {timeLeft[unit] < 10 ? `0${timeLeft[unit]}` : timeLeft[unit]}
            </p>
            <span className="text-sm text-gray-600">
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Timer;
