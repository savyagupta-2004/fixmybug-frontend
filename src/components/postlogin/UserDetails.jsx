import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Profile from "./Profile";

const UserDetails = () => {
  const { email } = useParams() || localStorage.getItem("userEmail");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://fixmybug-backend.vercel.app/auth/GetRepoDetails/${email}`
        );
        if (!response.ok) {
          throw new Error("User not found");
        }
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [email]);

  if (loading)
    return (
      <div className="w-screen h-screen flex justify-center items-center bg-gray-100 fixed top-0 left-0 z-50">
        <div className="loader"></div>
      </div>
    );

  if (error)
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="text-center  bg-white shadow-xl p-10 rounded-md w-96">
            <h2 className="text-xl font-bold text-[#e74c3c]">
              You have not applied for any bugs yet.
            </h2>
            <p className="text-lg mt-2 text-gray-700">
              Please apply for bugs to view the details.
            </p>
            <button
              onClick={() => navigate("/RequestFix")}
              className="mt-5 px-8 py-3 bg-[#3498db] text-white rounded-lg shadow-md hover:bg-[#2980b9] transition duration-300"
            >
              Apply for Bugs
            </button>

            <div className="mt-6">
              <img
                src="../Images/nodata.webp"
                alt="No Data"
                className="mx-auto mt-4 max-w-[250px] h-auto"
              />
            </div>
          </div>
        </div>

        <Footer />
      </>
    );

  return (
    <>
      <Navbar />
      <div className="min-h-[100vh] p-8">
        <h1 className="text-4xl text-[#0c4a6e] text-center font-bold mt-20">
          CHOOSE YOUR BUGFIXER
        </h1>

        <div className="flex mt-10 flex-wrap justify-center gap-8">
          {/* User profile cards */}
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
            <Profile
              name="Savya Gupta"
              image="../Images/founder.webp"
              city="Hyderabad, Telengana"
              role="Full-Stack Developer"
              experience="Software Developer with a focus on web applications."
            />
          </div>

          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
            <Profile
              name="Naval Bihani"
              image="../Images/naval.webp"
              city="Noida, Delhi"
              role="ML Enthusiast"
              experience="Software Developer with a focus on web applications."
            />
          </div>

          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
            <Profile
              name="Dhanush Emani"
              image="../Images/dhan.webp"
              city="Warangal, Telengana"
              role="Front-End Developer"
              experience="Software Developer with a focus on web applications."
            />
          </div>

          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
            <Profile
              name="Virinchi Edukula"
              image="../Images/vir1.webp"
              city="Kamand, Himachal Pradesh"
              role="Java Full Stack"
              experience="Software Developer with a focus on web applications."
            />
          </div>
        </div>

        {userData && (
          <div className="mt-20 mb-20 p-6 flex justify-center">
            {/* Bug Report Card */}
            <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-6 space-y-6 border-t-4 border-[#0c4a6e]">
              <h1 className="text-2xl font-bold text-center text-[#0c4a6e] mb-6">
                Bug Report & Progress
              </h1>

              {/* Bug Details */}
              <div className="space-y-6">
                <div className="flex items-center text-lg text-gray-700">
                  <p className="font-semibold text-[#0c4a6e] w-32">Name:</p>
                  <p className="font-medium">{userData.name}</p>
                </div>

                <div className="flex items-center text-lg text-gray-700">
                  <p className="font-semibold text-[#0c4a6e] w-32">Email:</p>
                  <p className="font-medium">{userData.email}</p>
                </div>

                <div className="flex items-center text-lg text-gray-700">
                  <p className="font-semibold text-[#0c4a6e] w-32">Phone:</p>
                  <p className="font-medium">{userData.phone}</p>
                </div>

                <div className="flex items-center text-lg text-gray-700">
                  <p className="font-semibold text-[#0c4a6e] w-32">
                    Branch Name:
                  </p>
                  <p className="font-medium">{userData.branchName}</p>
                </div>

                <div className="flex items-center text-lg text-gray-700">
                  <p className="font-semibold text-[#0c4a6e] w-32">
                    Bug Description:
                  </p>
                  <p className="font-medium">{userData.bugDescription}</p>
                </div>

                <div className="flex items-center text-lg text-gray-700">
                  <p className="font-semibold text-[#0c4a6e] w-32">
                    Repository URL:
                  </p>
                  <p>
                    <a
                      href={userData.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0c4a6e] hover:text-[#0c4a6e] hover:underline"
                    >
                      {userData.repoUrl}
                    </a>
                  </p>
                </div>

                <div className="flex items-center text-lg text-gray-700">
                  <p className="font-semibold text-[#0c4a6e] w-32">
                    Created At:
                  </p>
                  <p className="font-medium">
                    {new Date(userData.createdAt).toLocaleString()}
                  </p>
                </div>

                <div className="flex items-center text-lg text-gray-700">
                  <p className="font-semibold text-[#0c4a6e] w-32">
                    Updated At:
                  </p>
                  <p className="font-medium">
                    {new Date(userData.updatedAt).toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Progress Section */}
              <div className="space-y-4 mt-6">
                <h2 className="text-xl font-semibold text-[#0c4a6e]">
                  Progress Tracker
                </h2>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-lg text-gray-700">
                    <span>Received</span>
                    <span>In Progress</span>
                    <span>Resolved</span>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <span className="text-sm font-semibold">
                        Bug Received
                      </span>
                      <span className="text-sm font-semibold">
                        Bug Being Fixed
                      </span>
                      <span className="text-sm font-semibold">
                        Bug Resolved
                      </span>
                    </div>
                    <div className="flex mb-2 items-center justify-between">
                      <div className="w-1/3">
                        <div className="h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="w-1/3">
                        <div className="h-2 bg-yellow-500 rounded-full"></div>
                      </div>
                      <div className="w-1/3">
                        <div className="h-2 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Report Details */}
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-700">
                    Report Summary
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Issue Summary:</strong> The bug reported by the user
                    has been received. Our team is working on resolving it. We
                    aim to address the issue by fixing the repository and
                    providing a pull request soon.
                  </p>

                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Current Status:</strong> The bug has been identified
                    and is in the process of being resolved. Please expect an
                    update within the next few hours.
                  </p>

                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Next Steps:</strong> Once the bug fix is
                    implemented, we will run unit tests to confirm the issue is
                    resolved. The final patch will then be sent for review.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default UserDetails;
