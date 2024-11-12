import React from "react";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

const Aboutus = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="overflow-x-hidden">
        <section
          className="overflow-x-hidden relative md:bg-cover lg:bg-center sm:bg-contain bg-cover bg-center h-screen flex items-center justify-center"
          style={{
            backgroundImage: "url(../Images/he.webp)", // Replace with actual background image URL
          }}
        >
          {/* Overlay to darken the background */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative z-10 text-center text-white">
            {/* FixmyBug Logo */}
            <div className="mb-4">
              {/* <img
              width={62}
              src="../Images/logo.webp" // FixmyBug logo
              alt="FixmyBug Logo"
              className="mx-auto rounded-full"
            /> */}
            </div>

            {/* Slogan */}
            <p className="text-lg font-semibold mb-2 tracking-wider">
              DEBUG • FIX • PROTECT
            </p>

            {/* Main Title */}
            <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-4">
              FixmyBug – Your trusted web bug repair service
            </h1>
            {/* Button or CTA can go here if needed */}
          </div>
        </section>
        <div className="container mx-auto py-16">
          {/* Top Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Empowering Websites, Empowering People
            </h2>
            <p className="text-lg mb-6">
              At FixmyBug, we help businesses and individuals secure, debug, and
              optimize their web platforms.
            </p>
            <p className="text-gray-700">
              We provide comprehensive solutions to fix bugs, enhance security,
              and ensure seamless web experiences. Whether you’re a business
              owner or a creative professional, our services allow you to focus
              on growing your brand while we handle the technical details.
            </p>
          </div>

          {/* Offices Section */}
          <div className="mt-16">
            <div className="bg-blue-600 text-white py-10">
              <div className="flex flex-wrap justify-center items-center px-4 sm:px-8 md:justify-between">
                {[
                  { year: "2021", event: "Founded" },
                  { year: "2022", event: "Launched Core Services" },
                  { year: "2023", event: "First 100 Clients Served" },
                  { year: "2024", event: "Expanded Career Opportunities" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center w-full sm:w-1/2 md:w-1/4 xl:w-1/4 mb-8 sm:mb-0"
                  >
                    <p className="text-2xl font-bold">{item.year}</p>
                    <p className="mt-2">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* About the Founder */}
          <div className="mt-16 py-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg flex flex-col items-center justify-center gap-12 px-4 sm:px-8 lg:px-20">
            <div className="flex-shrink-0 relative">
              <img
                src="../Images/founder.webp"
                alt="Savya Gupta"
                className="rounded-full w-48 h-48 object-cover border-4 border-blue-300 shadow-lg transform transition-transform duration-300 hover:scale-110"
              />
              <span className="absolute bottom-0 right-0 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                CEO &amp; Founder
              </span>
            </div>

            <div className="text-center max-w-lg">
              <h3 className="text-4xl font-bold text-blue-900 mb-4">
                Meet Savya Gupta
              </h3>

              <div className="flex justify-center mb-4">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mr-2">
                  Web Development
                </span>
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mr-2">
                  Machine Learning
                </span>
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Innovation
                </span>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Savya Gupta is a visionary tech entrepreneur with a passion for
                creating innovative solutions. As the founder and CEO of this
                company, he brings his expertise in web development and machine
                learning to drive technological advancements.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {/* <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Learn More
                </a> */}
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/-savyagupta/"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-blue-600 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Company Overview */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">
              A Career in Debugging and Securing Websites
            </h3>
            <p className="text-lg mb-6">
              Join FixmyBug to make a real impact in the world of web security.
            </p>
            <p className="text-gray-700">
              We offer flexible career options for web enthusiasts interested in
              part-time and full-time positions in bug-fixing, security
              analysis, and website optimization. Help clients secure their
              sites while building a fulfilling career with us.
            </p>
          </div>

          {/* Stats Section */}
          {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <img
                width={660}
                src="../Images/success.webp"
                alt="Clients icon"
                className="mx-auto mb-4"
              />
              <h4 className="text-xl font-bold">10,000+</h4>
              <p className="text-gray-700">Websites successfully fixed</p>
            </div>
            <div className="p-4">
              <img
                width={200}
                src="../Images/clients.webp"
                alt="New sign-ups icon"
                className="mx-auto mb-4"
              />
              <h4 className="text-xl font-bold">500+</h4>
              <p className="text-gray-700">New clients every month</p>
            </div>
            <div className="p-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Team members icon"
                className="mx-auto mb-4"
              />
              <h4 className="text-xl font-bold">100+</h4>
              <p className="text-gray-700">Team members and growing</p>
            </div>
            <div className="p-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Projects icon"
                className="mx-auto mb-4"
              />
              <h4 className="text-xl font-bold">Worldwide</h4>
              <p className="text-gray-700">Serving clients globally</p>
            </div>
          </div> */}
        </div>
        <div className="container mx-auto py-16"></div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Aboutus;
