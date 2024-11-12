import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Spinner from "../Spinner";

const Login = ({ notify }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [type, setType] = useState("part-Time");
  const handleonchnageEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleonchnagePassword = (e) => {
    setpassword(e.target.value);
  };

  const handleonchnageType = (e) => {
    setType(e.target.value);
  };
  const backendUrl = "https://fixmybug-backend.vercel.app";
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${backendUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password, type: type }),
      });

      const json = await response.json();
      // for debugging purpose
      console.log(json);

      if (response.ok) {
        //if success then Save the token and redirect
        //double check auth-token
        localStorage.setItem("token", json.token);
        localStorage.setItem("resetPasswordToken", json.resetPasswordToken);
        console.log(json.user);
        localStorage.setItem("savedUser", JSON.stringify(json.user));

        // Retrieve savedUser from localStorage and parse it back to an object

        navigate("/postlogin-part");
        notify("welcome back!");
      } else {
        console.error("Login failed:", json.message);
        notify("Incorrect username or password");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const imgContainer = document.querySelector(".image-container");
    if (imgContainer) {
      imgContainer.style.transform = "translateX(0)";
      imgContainer.style.opacity = "1";
    }
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="flex min-h-[102vh] bg-gray-100 ">
        {/* Main container with padding */}
        <div className="container mx-auto p-8 md:p-16 lg:p-24 xl:p-32 mt-10">
          <div className="relative flex w-full max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            {/* Image container */}
            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-black bg-opacity-50 transition-all duration-1000 ease-in-out transform translate-x-full opacity-0 image-container">
              <img
                src="../Images/login1.webp"
                alt="Login Background"
                className="object-cover object-center w-full h-full"
              />
            </div>

            {/* Content overlay */}
            <div className="relative z-10 flex w-full md:w-1/2 bg-transparent">
              {/* Form content */}
              <form onSubmit={handleLogin} className="p-8 space-y-4 w-full">
                <h1 className="text-3xl font-bold mb-4">Login</h1>
                {/* <p className="text-sm text-gray-600 mb-6">
                  Welcome back! Log in to access your account and continue your
                  journey with us.
                </p> */}

                <div className="mb-4">
                  <label
                    htmlFor="username"
                    className="block text-md font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={handleonchnageEmail}
                    type="text"
                    id="username"
                    placeholder="Username"
                    required
                    className="block w-full px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-md font-medium text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={handleonchnagePassword}
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                    className="block w-full px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="flex space-x-4">
                  <div className="inline-flex items-center">
                    <input
                      type="radio"
                      name="account_type"
                      value="part-Time"
                      checked={type === "part-Time"}
                      onChange={handleonchnageType}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Part-Time BugFixer
                    </label>
                  </div>

                  <div className="inline-flex items-center">
                    <input
                      type="radio"
                      name="account_type"
                      value="full-Time"
                      checked={type === "full-Time"}
                      onChange={handleonchnageType}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Full-Time BugFixer
                    </label>
                  </div>
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className="w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {loading ? <Spinner /> : "Log In"}
                </button>
                <div className="text-center">
                  <p className="mt-4 text-xs text-gray-500">
                    Don't have an account?{" "}
                    <a
                      href="/signup-partTime"
                      className="text-blue-600 hover:underline"
                    >
                      Sign Up
                    </a>
                  </p>

                  <p className="mt-2 text-xs text-gray-500">
                    Forgot password?{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Reset Password
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Login;
