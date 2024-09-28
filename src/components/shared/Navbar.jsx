import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Access the current location
  const navigate = useNavigate();

  return (
    <div className="bg-black">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-6">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Fixmy<span className="text-[#6A38C2]">Bug</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5 text-white">
            <li>
              <Link
                to="/"
                className={`${
                  location.pathname === "/"
                    ? "border-b-2 border-[#6A38C2]" // Violet bottom line if active
                    : ""
                } pb-1`} // Add padding at the bottom for spacing
              >
                Home
              </Link>
            </li>
            {/* <li>
              <Link
                to="/jobs"
                className={`${
                  location.pathname === "/jobs"
                    ? "border-b-2 border-[#6A38C2]"
                    : ""
                } pb-1`}
              >
                About us
              </Link>
            </li> */}
            <div className="flex items-center">
              <li>
                <Link
                  to="/RequestFix"
                  className={`${
                    location.pathname === "/browse"
                      ? "border-b-2 border-[#6A38C2]"
                      : ""
                  } pb-1`}
                >
                  <span className="text-[#6A38C2] text-xl font-bold">Fix</span>
                </Link>
              </li>
              <li>
                <img
                  src="../Images/Fix.gif"
                  alt="hehe"
                  width={32}
                  className="self-center mt-1"
                ></img>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
