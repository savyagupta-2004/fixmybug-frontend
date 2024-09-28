import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBug,
  faCodeBranch,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const HeroSection = () => {
  return (
    <div className="text-center bg-[#E6E6E6]   overflow-hidden ">
      <div className="flex flex-col gap-5 my-10 ">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
          No. 1 Bug Hunt Website
        </span>

        <h1 className="text-3xl font-bold">
          FixmyBug <br />
          <span className="text-[#6A38C2]">No Bug Left Behind</span>
        </h1>
        <p className="text-xl">
          You are just one step away from getting your{" "}
          <span className="text-black font-bold">Bug Fixed</span>
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-md mx-auto  md:w-fit sm:w-[30rem] w-[20rem] ">
          {/* Card 1: Get a Bug */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <FontAwesomeIcon
              icon={faBug}
              className="h-12 w-12 text-[#6A38C2] mx-auto mb-4"
            />
            <h2 className="text-xl font-bold mb-2">Identify the Bug</h2>
            <p className="text-gray-700">
              Share the bug you're facing in frontend or backend by providing
              your GitHub repo. We’ll get all the information we need to start
              fixing!
            </p>
          </div>

          {/* Card 2: Apply for a Fix */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <FontAwesomeIcon
              icon={faCodeBranch}
              className="h-12 w-12 text-[#6A38C2] mx-auto mb-4"
            />
            <h2 className="text-xl font-bold mb-2">Submit for Fix</h2>
            <p className="text-gray-700">
              We will fork your repository, apply the fixes, and keep you
              updated throughout the process. No hassle, just results.
            </p>
          </div>

          {/* Card 3: Get it Fixed */}
          <div className="bg-white rounded-lg shadow-lg p-6 ">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="h-12 w-12 text-[#6A38C2] mx-auto mb-4"
            />
            <h2 className="text-xl font-bold mb-2">Get It Fixed</h2>
            <p className="text-gray-700">
              Once we’ve fixed the bug, we’ll create a pull request (PR) on your
              repository's desired branch. It’s that simple—and cost-free!
            </p>
          </div>
        </div>

        {/* Optional additional info */}
        <p className="text-gray-700 mt-5 text-balance">
          All services are free for mern stack! Just share your GitHub
          repository, and we'll handle the rest.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
