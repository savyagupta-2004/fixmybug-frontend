import React, { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    const preloader = document.querySelector(".preloader");
    setTimeout(() => {
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 1000);
    }, 3000);
  }, []);

  return (
    <div className="preloader fixed inset-0 bg-gradient-to-r from-gray-100 to-gray-200 z-[999999] opacity-100 transition-opacity duration-1000 flex justify-center items-center">
      <div className="spinner-wrap animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] mr-2 w-8 h-8"></div>
    </div>
  );
};

export default Preloader;
