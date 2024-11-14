import React, { useState, useEffect, useRef } from "react";

const OptinForm = ({ className }) => {
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement email submission logic here
    setSuccessMessage("Thank you for subscribing!");
    setEmail("");
    setTimeout(() => setIsModalOpen(false), 2000);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={`optin ${className}`}>
      <p className="text-sm font-light mb-4 text-center">
        Be the first to know when we launch!
      </p>
      <button
        onClick={toggleModal}
        className="py-2 px-6 text-white uppercase font-semibold bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-full shadow-md"
      >
        Subscribe Now
      </button>

      {isModalOpen && (
        <div
          ref={modalRef}
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg max-w-sm w-full"
          >
            <h3 className="text-xl font-bold mb-4">Enter Your Email</h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <button
              type="submit"
              className="py-2 px-6 text-white uppercase font-semibold bg-green-500 hover:bg-green-600 transition-colors duration-300 rounded-full shadow-md w-full"
            >
              Subscribe
            </button>
          </form>
        </div>
      )}

      {successMessage && (
        <div className="mt-4 text-green-500 font-semibold">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default OptinForm;
