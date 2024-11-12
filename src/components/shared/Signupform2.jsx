import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Spinner from "../Spinner";
import { useNavigate } from "react-router-dom";

const Signup = ({ notify }) => {
  const backendUrl = "https://fixmybug-backend.vercel.app";
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState(""); // Confirm Password
  const [resumeUrl, setResumeUrl] = useState("");

  // Refs for password visibility toggle
  const passRef = useRef();
  const confirmPassRef = useRef();
  const imgRef = useRef();

  const handleonchnageName = (e) => setName(e.target.value);
  const handleonchnageEmail = (e) => setEmail(e.target.value);
  const handleonchnagePassword = (e) => setPassword(e.target.value);
  const handleonchnageCPassword = (e) => setCPassword(e.target.value);
  const handleonchnageResumeUrl = (e) => setResumeUrl(e.target.value);

  // Password visibility toggle
  const showPass = (ref, imgRef) => {
    if (ref.current.type === "password") {
      ref.current.type = "text";
      imgRef.current.src = "../Images/Eyecross.webp"; // Update the eye icon to closed
    } else {
      ref.current.type = "password";
      imgRef.current.src = "../Images/Eyeopen.webp"; // Update the eye icon to open
    }
  };

  const handlesignup = async (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      notify("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`${backendUrl}/auth/register-fullTime`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          resumeUrl: resumeUrl,
        }),
      });
      if (response.ok) {
        const json = await response.json();
        localStorage.setItem("token", json.authtoken);
        localStorage.setItem("userdetails", json.savedUser);
        navigate("/postlogin-part");
        notify("You can go through the bugs, till we review your resume");
      } else if (response.status === 500) {
        const json = await response.json();
        console.log(json);
      } else if (response.status === 409) {
        const json = await response.json();
        notify("User already exists");
      } else {
        const savedUser = localStorage.getItem("savedUser");
        if (savedUser) {
          notify("Email already exists");
        } else {
          notify("Invalid details");
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-[112vh] bg-gray-100">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          className="bg-white rounded-lg shadow-xl w-full max-w-[50rem] p-8 md:p-12 lg:p-16"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-8 sm:mt-20 mt-20 lg:mt-0 md:mt-0">
            Sign Up <span className="mt-3"> (Full-Time BugFixer)</span>
          </h1>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-lg shadow-md">
              <img
                src="../Images/signup.webp"
                alt="signup"
                className="md:w-full md:h-full lg:w-full lg:h-full sm:w-fit sm:h-fit w-fit h-fit object-cover transform transition-all duration-500 hover:scale-105"
              />
            </div>

            <div className="space-y-6">
              <form onSubmit={handlesignup}>
                <label className="text-[13px]">Name</label>
                <input
                  required
                  value={name}
                  onChange={handleonchnageName}
                  type="text"
                  name="name"
                  className="w-full p-3 rounded-lg mb-3 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label className="text-[13px]">Email Address</label>
                <input
                  required
                  name="email"
                  value={email}
                  onChange={handleonchnageEmail}
                  type="email"
                  className="w-full p-3 rounded-lg mb-3 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Password Input */}
                <div className="mb-2 relative">
                  <label
                    htmlFor="password"
                    className="block text-zinc-700 text-[15px]"
                  >
                    Password
                  </label>
                  <input
                    ref={passRef}
                    type="password"
                    id="password"
                    name="password"
                    required
                    value={password}
                    onChange={handleonchnagePassword}
                    className="py-2 w-full px-3 border border-zinc-300 rounded-md bg-gray-100"
                  />
                  <span
                    className="absolute inset-y-4 right-0 top-[60%] flex items-center pr-3 cursor-pointer"
                    onClick={() => showPass(passRef, imgRef)}
                  >
                    <img
                      ref={imgRef}
                      width={24}
                      src="../images/Eyeopen.webp"
                      alt="Eye"
                    />
                  </span>
                </div>

                {/* Confirm Password Input */}
                <div className="mt-2 mb-2">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-zinc-700 text-[15px]"
                  >
                    Confirm Password
                  </label>
                  <input
                    ref={confirmPassRef}
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    required
                    value={cpassword}
                    onChange={handleonchnageCPassword}
                    className="py-2 w-full px-3 border border-zinc-300 rounded-md bg-gray-100"
                  />
                  {cpassword && password !== cpassword && (
                    <p className="text-red-500 text-xs">
                      Passwords do not match
                    </p>
                  )}
                </div>

                {/* Resume URL Input */}
                <label className="text-[13px]">
                  Open access Link for Resume
                </label>
                <input
                  required
                  name="resumeUrl"
                  value={resumeUrl}
                  onChange={handleonchnageResumeUrl}
                  type="url"
                  className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <motion.button
                  disabled={loading}
                  variants={variants}
                  transition={{ delay: 0.3 }}
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out mt-4"
                >
                  {loading ? <Spinner /> : "Sign up"}
                </motion.button>

                <p className="text-sm text-gray-500 mt-3 text-center">
                  Already have an account?{" "}
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Login
                  </a>
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
