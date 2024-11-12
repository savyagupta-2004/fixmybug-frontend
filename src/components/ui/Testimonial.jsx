import React from "react";

const Testimonial = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-10 ">
        Listen To What People Have To Say About
        <span className="text-[#0c4a6e]"> FixmyBug</span>
      </h1>
      <div className="flex  justify-center items-center  bg-[#e6e6e6] p-6">
        <div className="flex flex-row  bg-white  p-8 rounded-lg shadow-lg max-w-[55rem] px-14">
          {/* Left: Video */}
          <div className="flex flex-col items-center text-center mr-10">
            <video
              className="w-[130rem] h-[30rem] object-cover mb-4"
              controls // Enables play controls (play, pause, etc.)
              loop // Loops the video
              muted // Mutes the video by default
              autoPlay // Autoplays the video
            >
              <source src="../Images/review1.mp4" type="video/mp4" />
              {/* Add other formats as fallbacks */}
              <source src="../Videos/testimonial.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <p className="mt-2 text-xl font-semibold text-gray-800">
              DearDiary
            </p>
            <a
              href="https://ddiary.netlify.app"
              className="text-blue-500 mt-1 hover:underline"
            >
              DearDiary.com
            </a>
          </div>

          {/* Right: Testimonial content */}
          <div className="flex flex-col justify-center max-w-lg">
            <blockquote className="italic  text-gray-600  mb-6">
              “FixmyBug is the perfect solution for anyone with a clear vision
              for their project but limited technical expertise. Whether you're
              facing bugs or software issues.”
            </blockquote>
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">
                Products used by DearDiary
              </h4>
              <ul className="list-none space-x-2 space-y-2 ">
                <li className="bg-gray-200 py-2 px-4 rounded-md inline-block">
                  Bug Fixee
                </li>
                <li className="bg-gray-200 py-2 px-4 rounded-md inline-block">
                  Online Store
                </li>
                <li className="bg-gray-200 py-2 px-4 rounded-md inline-block">
                  SSL Certificates
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
