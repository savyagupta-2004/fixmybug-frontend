import React from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import TechShowcase from "./ui/TechShowcase";

const Aboutus = () => {
  return (
    <div className="font-inter">
      <Navbar />

      {/* Hero Section */}
      <section className=" mt-16 text-white bg-[#d6e9e7] py-20 text-center relative overflow-hidden">
        <img
          src="../Images/office.webp"
          alt="Office Building"
          className="absolute inset-0 w-full h-full object-cover  opacity-30"
        />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            We'd love to hear from you. Here's how you can reach us...
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+35315124400"
              className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Call Us
            </a>
            <a
              href="mailto:support@FixmyBug.com"
              className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Email Us
            </a>
            <a
              href="#contact-form"
              className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Form
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <i className="fas fa-phone text-2xl text-gray-600 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="mb-4">+91 7207319833</p>
              <p className="mb-4">Monday - Friday, 9am - 5pm IST</p>
              <a
                href="#"
                className="text-orange-500 hover:text-orange-600 transition-colors duration-300"
              >
                View all phone numbers
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <i className="fas fa-envelope text-2xl text-gray-600 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="mb-4">
                <a
                  href="mailto:support@FixmyBug.com"
                  className="hover:underline"
                >
                  fixedmybug@gmail.com
                </a>
              </p>
              <p className="mb-4">
                We respond within 24 hours on business days.
              </p>
              <a
                href="#"
                className="text-orange-500 hover:text-orange-600 transition-colors duration-300"
              >
                View all email addresses
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      {/* <section id="contact-form" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <form className="max-w-xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="ABC Corporation"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
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
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="+91 1234567890"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Your message..."
                />
              </div>
              <div className="flex justify-center md:justify-end">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section> */}
      <TechShowcase />

      {/* FAQ */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details open>
              <summary className="cursor-pointer font-semibold text-lg">
                What services does FixmyBug offer?
              </summary>
              <p className="mt-2 pl-4">
                FixmyBug provides comprehensive software development and
                maintenance services, including bug fixing, feature
                enhancements, and system integration.
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-semibold text-lg">
                Can you explain your development process?
              </summary>
              <p className="mt-2 pl-4">
                At FixmyBug, we follow an agile methodology. We collaborate
                closely with clients to understand project requirements, then
                break them down into manageable sprints. We prioritize tasks,
                develop solutions, test thoroughly, and deliver incremental
                improvements throughout the project lifecycle.
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-semibold text-lg">
                How do you ensure quality control during development?
              </summary>
              <p className="mt-2 pl-4">
                FixmyBug employs rigorous testing procedures, including unit
                tests, integration tests, and comprehensive QA processes. We
                also conduct regular code reviews to maintain high standards of
                coding excellence and adhere to best practices.
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-semibold text-lg">
                What kind of technologies does FixmyBug specialize in?
              </summary>
              <p className="mt-2 pl-4">
                While we're adaptable to various technologies, FixmyBug
                specializes in modern web development frameworks like React,
                Vue.js, and Angular. We also have expertise in backend
                technologies such as Node.js, Python, and Java, as well as
                database management systems like MySQL and MongoDB.
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-semibold text-lg">
                How do you handle client communication during projects?
              </summary>
              <p className="mt-2 pl-4">
                We maintain clear and transparent communication channels
                throughout the project. Regular progress updates, daily
                stand-ups, and scheduled check-ins ensure that both parties are
                informed and aligned. We also utilize project management tools
                to facilitate easy collaboration and task tracking.
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-semibold text-lg">
                Can you provide examples of successful projects you've
                completed?
              </summary>
              <p className="mt-2 pl-4">
                While we don't disclose specific client information due to
                confidentiality agreements, we can share case studies
                demonstrating our ability to deliver high-quality solutions
                across various industries and project types. These showcase our
                adaptability and commitment to meeting client needs.
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-semibold text-lg">
                How do you ensure data security and privacy for client projects?
              </summary>
              <p className="mt-2 pl-4">
                FixmyBug takes data security and privacy very seriously. We
                implement robust security measures, including encryption, secure
                access controls, and regular security audits. We also adhere to
                industry-standard compliance regulations such as GDPR and HIPAA,
                depending on the nature of the project.
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-semibold text-lg">
                How do you handle project timelines and deadlines?
              </summary>
              <p className="mt-2 pl-4">
                We work closely with clients to establish realistic project
                timelines based on scope, complexity, and resource allocation.
                We prioritize tasks effectively, manage dependencies, and
                maintain open communication channels to ensure we meet or exceed
                project deadlines.
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-semibold text-lg">
                Can you explain your pricing structure?
              </summary>
              <p className="mt-2 pl-4">
                FixmyBug offers flexible pricing models tailored to client
                needs. Our rates are competitive and based on factors such as
                project scope, technology stack, team size, and duration. We
                provide transparent cost estimates upfront and offer options for
                fixed-price agreements or hourly billing, depending on what
                works best for our clients.
              </p>
            </details>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Aboutus;
