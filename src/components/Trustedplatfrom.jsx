import React from "react";

const TrustedPlatform = () => {
  return (
    <>
      <div className="px-10">
        <section className="text-center py-10  px-10">
          <h1 className="text-4xl  font-bold mb-4">
            Fixing Bugs, One Website at a Time
          </h1>
          <p className="text-gray-600 mb-8">
            Experience the Power of Professional Bug Fixing Services
          </p>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 px-4 md:px-0">
            {/* Card 1 */}
            <div className="group relative bg-amber-100 p-6 rounded-lg h-[20rem] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-500 group-hover:-translate-y-full">
                <h2 className="text-4xl font-bold text-black">200+</h2>
                <p className="text-gray-700 mt-2">Fixed Websites</p>
              </div>
              <img
                className="absolute bottom-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0"
                src="../Images/girl.webp"
                alt="Happy Students"
              />
            </div>

            {/* Card 2 */}
            <div className="group relative bg-rose-100 p-6 rounded-lg h-[20rem] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-500 group-hover:-translate-y-full">
                <h2 className="text-4xl font-bold text-black">5+</h2>
                <p className="text-gray-700 mt-2">BugFixers</p>
              </div>
              <img
                className="absolute bottom-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0"
                src="../Images/bugfixer.webp"
                alt="Mock Tests"
              />
            </div>

            {/* Card 3 */}
            <div className="group relative bg-sky-100 p-6 rounded-lg h-[20rem] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-500 group-hover:-translate-y-full">
                <h2 className="text-4xl font-bold text-black">500+</h2>
                <p className="text-gray-700 mt-2">Happy Customers</p>
              </div>
              <img
                className="absolute bottom-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0"
                src="../Images/happy.webp"
                alt="Video Lectures"
              />
            </div>

            {/* Card 4 */}
            <div className="group relative bg-indigo-100 p-6 rounded-lg h-[20rem] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-500 group-hover:-translate-y-full">
                <h2 className="text-4xl font-bold text-black">24/7</h2>
                <p className="text-gray-700 mt-2">Work assistance</p>
              </div>
              <img
                className="absolute bottom-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0"
                src="../Images/help.webp"
                alt="Practice Papers"
              />
            </div>
          </div>

          {/* <div className="mt-8">
            <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700">
              Get Started
            </button>
          </div> */}
        </section>
      </div>
    </>
  );
};

export default TrustedPlatform;
