import React from "react";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const Confirmation = () => {
  const formData = JSON.parse(localStorage.getItem("contactForm"));

  return (
    <>
      <Navbar />
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-blue-600 mb-6 text-center">
            Thank You!
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <h3 className="text-3xl font-semibold text-green-600 mb-4">
                Your Information
              </h3>
              {/* <img
                src="../Images/tick.webp"
                alt="Checkmark icon"
                className="w-16 h-auto md:w-24 md:h-24"
              /> */}
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                <strong>Name:</strong> {formData.name}
              </p>
              <p className="text-lg text-gray-700">
                <strong>Email:</strong> {formData.email}
              </p>
              <p className="text-lg text-gray-700">
                <strong>Location:</strong> {formData.location}
              </p>
              <div className="bg-gray-100 p-4 rounded-md mb-4">
                <pre>{formData.message}</pre>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between mt-8">
              <p className="text-xl font-semibold text-blue-600">
                We've received your inquiry!
              </p>
              {/* <img
                src="../Images/smiling-face.webp"
                alt="Smiling face icon"
                className="w-16 h-auto md:w-24 md:h-24"
              /> */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Confirmation;
