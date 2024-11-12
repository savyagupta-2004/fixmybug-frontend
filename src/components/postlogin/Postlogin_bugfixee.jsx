import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Link } from "react-router-dom";

const Postlogin_bugfixee = () => {
  const userEmail = "guptasavya667@gmail.com"; // Example email

  return (
    <>
      <Navbar />
      <div>
        <div className="min-h-[80vh]">
          <h1>Welcome to the Post Login Page</h1>
          <button>
            <Link to={`/user/${userEmail}`}>View My Details</Link>
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Postlogin_bugfixee;
