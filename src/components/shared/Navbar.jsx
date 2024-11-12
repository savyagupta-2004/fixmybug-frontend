import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold text-black transition-colors duration-300">
            Fixmy<span className="text-[#0c4a6e]">Bug</span>
          </h1>
        </Link>

        <div className="hidden sm:flex items-center lg:space-x-8 md:space-x-8 sm:space-x-4">
          <Link
            to="/"
            className={`text-base font-medium text-black hover:text-[#0c4a6e] transition-colors duration-300 ${
              location.pathname === "/"
                ? "border-b-2 border-[#0c4a6e] pb-1"
                : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/RequestFix"
            className={`text-base font-medium text-black hover:text-[#0c4a6e] transition-colors duration-300 ${
              location.pathname === "/RequestFix"
                ? "border-b-2 border-[#0c4a6e] pb-1"
                : ""
            }`}
          >
            Fix
          </Link>
          <Link
            to="/login"
            className={`text-base font-medium text-black hover:text-[#0c4a6e] transition-colors duration-300 ${
              location.pathname === "/login"
                ? "border-b-2 border-[#0c4a6e] pb-1"
                : ""
            }`}
          >
            Login
          </Link>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative inline-flex items-center"
          >
            <span className="text-base font-medium text-black hover:text-[#0c4a6e] transition-colors duration-300">
              Signup
            </span>
            <svg
              className={`ml-2 h-5 w-5 transform transition-transform duration-200 ${
                isHovered ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <ul
              className={`absolute left-[-50%] mt-2 top-6 origin-top-left transform ${
                isHovered
                  ? "scale-y-100 opacity-100 bg-[#e6e6e6] p-5 w-[15rem]"
                  : "scale-y-0 opacity-0"
              } transition-all duration-300 ease-in-out space-y-2`}
            >
              <li>
                <Link
                  to="/signup-partTime"
                  className="px-4 py-1 relative font-medium text-white bg-[#0c4a6e] hover:text-white transition-colors duration-300"
                >
                  Part-Time
                </Link>
              </li>
              <li>
                <Link
                  to="/signup-fullTime"
                  className="px-4 py-1 font-medium text-white bg-[#0c4a6e] hover:text-white transition-colors duration-300"
                >
                  Full-Time
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to="/Contact-us"
            className={`text-base font-medium text-black hover:text-[#0c4a6e] transition-colors duration-300 ${
              location.pathname === "/Contact-us"
                ? "border-b-2 border-[#0c4a6e] pb-1"
                : ""
            }`}
          >
            Contact us
          </Link>
          <Link
            to="/about-us"
            className={`text-base font-medium text-black hover:text-[#0c4a6e] transition-colors duration-300 ${
              location.pathname === "/about-us"
                ? "border-b-2 border-[#0c4a6e] pb-1"
                : ""
            }`}
          >
            About us
          </Link>
          <Link
            to="/Chat"
            className={`text-base font-medium text-black hover:text-[#0c4a6e] transition-colors duration-300 ${
              location.pathname === "/Chat"
                ? "border-b-2 border-[#0c4a6e] pb-1"
                : ""
            }`}
          >
            Chat
          </Link>
          <Link
            to="/blog"
            className={`text-base font-medium text-black hover:text-[#0c4a6e] transition-colors duration-300 ${
              location.pathname === "/blog"
                ? "border-b-2 border-[#0c4a6e] pb-1"
                : ""
            }`}
          >
            Blog
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-black focus:outline-none"
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out bg-[#e6e6e6] shadow-md w-64 p-4 sm:hidden z-50`}
        >
          <button
            className="text-black focus:outline-none mb-4"
            onClick={toggleSidebar}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="text-base font-medium text-black bg-white px-3 py-1 w-full block"
                onClick={toggleSidebar}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/RequestFix"
                className="text-base font-medium text-black bg-white px-3 py-1 w-full block"
                onClick={toggleSidebar}
              >
                Fix
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-base font-medium text-black bg-white px-3 py-1 w-full block"
                onClick={toggleSidebar}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup-partTime"
                className="text-base font-medium text-black bg-white px-3 py-1 w-full block"
                onClick={toggleSidebar}
              >
                Signup (Part-Time)
              </Link>
            </li>
            <li>
              <Link
                to="/signup-fullTime"
                className="text-base font-medium text-black bg-white px-3 py-1 w-full block"
                onClick={toggleSidebar}
              >
                Signup (Full-Time)
              </Link>
            </li>
            <li>
              <Link
                to="/Contact-us"
                className="text-base font-medium text-black bg-white px-3 py-1 w-full block"
                onClick={toggleSidebar}
              >
                Contact us
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="text-base font-medium text-black bg-white px-3 py-1 w-full block"
                onClick={toggleSidebar}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/Chat"
                className="text-base font-medium text-black bg-white px-3 py-1 w-full block"
                onClick={toggleSidebar}
              >
                Chat
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-base font-medium text-black bg-white px-3 py-1 w-full block"
                onClick={toggleSidebar}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
