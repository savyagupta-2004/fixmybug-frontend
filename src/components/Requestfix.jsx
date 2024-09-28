import React, { useState, useRef } from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import Spinner from "../components/Spinner";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Requestfix = ({ notify }) => {
  const [userdetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [formDetails, setFormDetails] = useState({
    repoUrl: "",
    branchName: "",
    bugDescription: "",
  });

  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const inputsRef = useRef([]); // Initialize the ref as an empty array
  const backendUrl = "https://fixmybug-backend.vercel.app";
  let navigate = useNavigate();

  const handleOnChange = (e) => {
    setUserDetails({
      ...userdetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnChange2 = (e) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    setLoading(true);
    try {
      const response = await fetch(`${backendUrl}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userdetails.name,
          email: userdetails.email,
          phone: userdetails.phone,
        }),
      });

      if (response.ok) {
        // notify("User details saved successfully")
        console.log("User details saved successfully");
      } else {
        const savedUser = localStorage.getItem("savedUser");
        notify(savedUser ? "Email already exists" : "Invalid details");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (element, index) => {
    if (/^\d$/.test(element.value) || element.value === "") {
      const newOtp = [...otp];
      newOtp[index] = element.value;
      setOtp(newOtp);

      // Focus on the next input
      if (element.value !== "" && index < 5) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleOtpKeyDown = (event, index) => {
    if (event.key === "Backspace" && index > 0 && otp[index] === "") {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `${backendUrl}/auth/email_verification-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: userdetails.email, otp: otp.join("") }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        notify("Invalid otp");
      } else {
        notify("OTP verified successfully");
        await handleSignup();
        setStep(3);
      }
    } catch (error) {
      notify("Invalid credentials", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailVerification = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${backendUrl}/auth/email_verification`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userdetails.email }),
      });

      if (response.ok) {
        setStep(2);
        notify(
          "Kindly verify your email to complete the registration process."
        );
      } else {
        const errorMessage = await response.text();
        notify(
          errorMessage.includes("No account")
            ? "No account found with this email"
            : "Account already exists"
        );
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setLoading(false);
    }
  };
  const handlegithubrepo = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${backendUrl}/auth/register-repo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          repoUrl: formDetails.repoUrl,
          bugDescription: formDetails.bugDescription,
          branchName: formDetails.branchName,
          email: userdetails.email,
        }),
      });

      if (response.ok) {
        notify("Request sent successfully,The team will get in touch with you");
        navigate("/");
      } else {
        console.log("Error occured");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-white">
        <Navbar />
        {step === 1 && (
          <div className="max-w-4xl mx-auto my-10 min-h-[66.6vh] border-2 p-10 rounded-lg bg-[#E6E6E6] shadow-lg">
            <h1 className="font-bold text-3xl text-center mb-8">
              Enter Your Contact Information
            </h1>

            <form className=" space-y-6" onSubmit={handleEmailVerification}>
              <div className="space-y-2">
                <label className="block font-semibold text-lg" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full p-3 bg-white text-[#6A38C2] rounded-lg border border-[#6A38C2] shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6A38C2] transition-all duration-200"
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={3}
                  placeholder="John Doe"
                  value={userdetails.name}
                  onChange={handleOnChange}
                />
              </div>

              <div className="space-y-2">
                <label className="block font-semibold text-lg" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full p-3 bg-white text-[#6A38C2] rounded-lg border border-[#6A38C2] shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6A38C2] transition-all duration-200"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@email.com"
                  value={userdetails.email}
                  onChange={handleOnChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block font-semibold text-lg" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  className="w-full p-3 bg-white text-[#6A38C2] rounded-lg border border-[#6A38C2] shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6A38C2] transition-all duration-200"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+123 456 7890"
                  value={userdetails.phone}
                  onChange={handleOnChange}
                  required
                  minLength={10}
                />
              </div>

              <button
                disabled={loading}
                className="w-full py-3 bg-white text-[#6A38C2] font-bold rounded-lg shadow-lg hover:bg-[#553399] hover:text-white transition-all duration-200 transform hover:scale-105"
                type="submit"
              >
                {loading ? <Spinner /> : "Verify Email address"}
              </button>
            </form>
          </div>
        )}
        {step === 2 && (
          <form
            onSubmit={handleVerifyOtp}
            className="w-full max-w-md mx-auto min-h-[65.5vh]  "
          >
            <div className="mt-32 flex flex-col  items-center space-y-6  my-auto bg-[#E6E6E6]  p-8 rounded-lg shadow-lg">
              <h1 className="text-xl   font-bold">OTP Verification</h1>
              <p className="text-center  text-[16px]">
                Enter the OTP sent to <strong>{userdetails.email}</strong>
              </p>

              <div className="flex space-x-2">
                {otp.map((data, index) => (
                  <input
                    key={index}
                    type="text"
                    className="w-12 h-12 text-center border border-[#6A38C2] bg-white rounded-lg text-xl text-[#6A38C2] focus:ring-2 focus:ring-[#6A38C2] focus:outline-none shadow-md transition-all duration-200"
                    maxLength="1"
                    value={otp[index]}
                    onChange={(e) => handleOtpChange(e.target, index)}
                    onKeyDown={(e) => handleOtpKeyDown(e, index)}
                    ref={(el) => (inputsRef.current[index] = el)}
                    required
                  />
                ))}
              </div>
              <button
                type="submit"
                className="relative w-full py-3 bg-[#6A38C2] text-white font-bold  hover:bg-[#553399] transition-all duration-200 transform hover:scale-105 shadow-lg flex justify-center items-center"
                disabled={loading}
              >
                {loading && <Spinner className="absolute inset-0 w-6 h-6" />}
                {!loading && "Verify OTP"}
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="max-w-4xl mx-auto my-10 min-h-[66.6vh] border-2 p-10 rounded-lg bg-[#E6E6E6] shadow-lg">
            <div className="flex justify-center items-center">
              <h1 className="font-bold text-3xl text-center ">Request a Fix</h1>
              <div className="flex items-center justify-center w-[100px] h-[100px] rounded-full  border-4 ml-5">
                <img
                  src="../Images/spray.gif"
                  alt="spray"
                  width={52}
                  className=" "
                />
                <img
                  src="../Images/bug.gif"
                  alt="spider2"
                  width={52}
                  className=" "
                />
              </div>
            </div>

            <form className="space-y-6" onSubmit={handlegithubrepo}>
              <div className="flex items-start gap-4">
                {" "}
                {/* Adjust flex for alignment */}
                {/* GitHub Repo URL and Branch Name */}
                <div className="flex gap-4 w-full">
                  <div className="w-full md:w-1/2 space-y-2">
                    <label
                      className="block font-semibold text-lg"
                      htmlFor="repoUrl"
                    >
                      GitHub Repository URL
                    </label>
                    <input
                      className="w-full p-3 bg-white text-[#6A38C2] rounded-lg border border-[#6A38C2] shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6A38C2] transition-all duration-200"
                      type="url"
                      id="repoUrl"
                      name="repoUrl"
                      placeholder="https://github.com/username/repository"
                      value={formDetails.repoUrl}
                      onChange={handleOnChange2}
                      required
                      minLength={5}
                    />
                  </div>

                  <div className="w-full md:w-1/2 space-y-2">
                    <label
                      className="block font-semibold text-lg"
                      htmlFor="branchName"
                    >
                      Branch Name for Pull Request
                    </label>
                    <input
                      className="w-full p-3 bg-white text-[#6A38C2] rounded-lg border border-[#6A38C2] shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6A38C2] transition-all duration-200"
                      type="text"
                      id="branchName"
                      name="branchName"
                      placeholder="e.g., bug-fix-branch"
                      value={formDetails.branchName}
                      onChange={handleOnChange2}
                      required
                    />
                  </div>
                </div>
                {/* GIFs beside the input fields */}
              </div>

              {/* Bug Description */}
              <div className="space-y-2">
                <label
                  className="block font-semibold text-lg"
                  htmlFor="bugDescription"
                >
                  Briefly Explain the Bug
                </label>
                <textarea
                  className="w-full p-3 bg-white text-[#6A38C2] rounded-lg border border-[#6A38C2] shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6A38C2] transition-all duration-200"
                  id="bugDescription"
                  name="bugDescription"
                  placeholder="Provide a short description of the issue..."
                  rows="4"
                  value={formDetails.bugDescription}
                  onChange={handleOnChange2}
                />
              </div>

              {/* Important Points */}
              <div className="mt-8 space-y-4">
                <h2 className="font-bold text-2xl text-center">
                  Important Information
                </h2>
                <ul className="list-disc space-y-2 text-[#6A38C2]">
                  <li>
                    We do not guarantee the resolution of the bug. The
                    feasibility of the fix depends on the complexity of the
                    issue, but rest assured, it will not affect your current
                    functionality.
                  </li>
                  <li>
                    The estimated response time for addressing the bug is
                    typically 3-4 days, which may vary based on the difficulty
                    of the issue.
                  </li>
                  <li>
                    A review meeting will assess the bug, and you will be
                    notified via email if the bug is chargeable before
                    proceeding with the fix.
                  </li>
                </ul>
              </div>

              {/* Submit Button */}
              <button
                disabled={loading}
                className="w-full py-3 bg-white text-[#6A38C2] font-bold rounded-lg shadow-lg hover:bg-[#553399] hover:text-white transition-all duration-200 transform hover:scale-105"
                type="submit"
              >
                {loading ? <Spinner /> : "Submit Request"}
              </button>
            </form>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};

export default Requestfix;
