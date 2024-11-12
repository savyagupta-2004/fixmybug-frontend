import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SmartContactForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    message: "",
    consent: false,
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    if (e.target.type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please give your consent before submitting the form.");
      return;
    }

    // Store form data in localStorage
    localStorage.setItem("contactForm", JSON.stringify(formData));

    // Redirect to confirmation page
    await navigate("/confirmation");
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const stepImages = [
    "../Images/consent.webp",
    "../Images/middle.webp",
    "../Images/thinking.webp",
  ];

  const getProgressBarWidth = () => {
    return `${(step / 3) * 100}%`;
  };

  const renderProgressBar = () => {
    return (
      <div className="flex justify-between mb-4 relative">
        {[1, 2, 3].map((num) => (
          <span
            key={num}
            className={`w-full h-2 ${
              num <= step ? "bg-blue-500" : "bg-gray-300"
            } transition-colors duration-300`}
          />
        ))}
        <div
          style={{ width: getProgressBarWidth() }}
          className="absolute top-0 left-0 h-2 bg-orange-500 rounded-full"
        ></div>
      </div>
    );
  };

  useEffect(() => {
    // Check if there's existing form data in localStorage
    const storedData = localStorage.getItem("contactForm");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8"> Contact Form</h2>
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-8 md:p-12 relative">
          {renderProgressBar()}

          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <>
                  <h3 className="text-xl font-semibold mb-4">
                    Welcome to Our Contact Form
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for considering our services. Before we proceed,
                    we need your consent to collect and store your information.
                  </p>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Do you consent to us contacting you regarding your
                      inquiry?
                    </label>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleInputChange}
                        className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        Yes, I consent to being contacted.
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={nextStep}
                    type="button"
                    disabled={!formData.consent}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 cursor-pointer"
                  >
                    Continue
                  </button>
                </>
              )}

              {step === 2 && (
                <>
                  <h3 className="text-xl font-semibold mb-4">
                    Please Provide Your Basic Details
                  </h3>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={prevStep}
                      type="button"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Previous
                    </button>
                    <button
                      onClick={nextStep}
                      type="button"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Next
                    </button>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h3 className="text-xl font-semibold mb-4">
                    Share Your Thoughts
                  </h3>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={prevStep}
                      type="button"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Submit
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src={stepImages[step - 1]}
              alt={`Step ${step} illustration`}
              className="rounded-lg  w-[20rem] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );

  return null; // Return null when rendering the confirmation page
};

export default SmartContactForm;
