import React from "react";

const Support = () => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-100 py-16 px-4 text-center mb-20">
      <h1 className="text-5xl md:text-5xl font-bold text-gray-800 mb-4 tracking-wide">
        Our<span className="text-[#0c4a6e]"> team's </span>got your back
      </h1>
      <p className="text-gray-600 text-lg md:text-xl mb-16">
        Professional support available 24/7 to ensure your success.
      </p>

      <div className="flex flex-col md:flex-row lg:w-full md:w-full sm:w-fit mx-auto justify-center items-stretch gap-8 md:gap-12">
        {/* 24/7 Availability */}
        <div className="bg-white p-10 rounded-lg shadow-lg border border-gray-200 transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            fill="#3498db"
            className="absolute bottom-0 left-0 w-full z-0"
          >
            <path d="M0,64L80,74.7C160,85,320,107,480,122.7C640,139,800,149,960,160C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
          <i className="fas fa-smile text-5xl mb-4 text-blue-600 relative z-10 group-hover:animate-float"></i>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 relative z-10 group-hover:animate-float">
            24/7 availability
          </h2>
          <p className="text-gray-600 max-w-xs relative z-10 group-hover:animate-float">
            Enjoy the peace of mind that comes with a dedicated support team —
            available 24/7.
          </p>
        </div>

        {/* Experts on-call */}
        <div className="bg-white p-10 rounded-lg shadow-lg border border-gray-200 transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            fill="#f1c40f"
            className="absolute bottom-0 left-0 w-full z-0"
          >
            <path d="M0,64L80,74.7C160,85,320,107,480,122.7C640,139,800,149,960,160C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
          <i className="fas fa-video text-5xl mb-4 text-blue-600 relative z-10 group-hover:animate-float"></i>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 relative z-10 group-hover:animate-float">
            Experts on-call
          </h2>
          <p className="text-gray-600 max-w-xs relative z-10 group-hover:animate-float">
            Get comprehensive onboarding and training from experts to help you
            maximize your ROI.
          </p>
        </div>

        {/* Invested in your success */}
        <div className="bg-white p-10 rounded-lg shadow-lg border border-gray-200 transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            fill="#e74c3c"
            className="absolute bottom-0 left-0 w-full z-0"
          >
            <path d="M0,64L80,74.7C160,85,320,107,480,122.7C640,139,800,149,960,160C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
          <i className="fas fa-cog text-5xl mb-4 text-blue-600 relative z-10 group-hover:animate-float"></i>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 relative z-10 group-hover:animate-float">
            Invested in your success
          </h2>
          <p className="text-gray-600 max-w-xs relative z-10 group-hover:animate-float">
            We work with you to define key metrics, track progress, and measure
            impact on your business.
          </p>
        </div>
      </div>

      {/* CSS for Floating Animation */}
      <style jsx>{`
        .group:hover .group-hover\\:animate-float {
          animation: float 2s ease-in-out infinite;
        }
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Support;
