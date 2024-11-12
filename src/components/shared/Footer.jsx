import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Product Column */}
          <FooterColumn
            title="Product"
            items={[
              { label: "Apply for a fix", link: "/RequestFix" },
              { label: "Part Time BugFixer", link: "/signup-partTime" },
              { label: "Full Time BugFixer", link: "/signup-fullTime" },
              { label: "About us", link: "/about-us" },
              { label: "Contact us", link: "/contact-us" },
              { label: "Career", link: "/signup-partTime" },
              { label: "Webinars", link: "#" },
              { label: "Orientations", link: "#" },
              { label: "AI Chatbot", link: "#" },
              { label: "Collaboration", link: "#" },
              { label: "Analytics", link: "/signup-partTime" },
              { label: "Buisiness Affiliates", link: "#" },
            ]}
          />

          <FooterColumn
            title="FixmyBug for"
            items={[
              { label: "Enterprise", link: "#" },
              { label: "Small Business", link: "#" },
              { label: "Creative Professionals", link: "#" },
              { label: "Educators", link: "#" },
              { label: "Marketers", link: "#" },
              { label: "Corporate Comms", link: "#" },
              { label: "Learning and Development", link: "#" },
              { label: "Healthcare", link: "#" },
              { label: "Retail", link: "#" },
              { label: "Financial Services", link: "#" },
            ]}
          />

          {/* Solutions Column */}
          <FooterColumn
            title="Solutions"
            items={[
              { label: "FixmyBug Central", link: "#" },
              { label: "FixmyBug Marketing", link: "#" },
            ]}
          />

          {/* Resources Column */}
          <FooterColumn
            title="Resources"
            items={[
              { label: "Help Center", link: "Contact-us" },
              { label: "Contact Support", link: "/Contact-us" },
              { label: "Customer Stories", link: "#" },
              { label: "Events & Webinars", link: "#" },
              { label: "Blog", link: "#" },
              { label: "Developers", link: "#" },
              { label: "Guidelines", link: "#" },
              { label: "FixmyBug Experts", link: "#" },
              { label: "Watch", link: "#" },
              { label: "Media Kit", link: "#" },
              { label: "Integrations Hub", link: "#" },
            ]}
          />

          {/* Company Column */}
          <FooterColumn
            title="Company"
            items={[
              { label: "About FixmyBug", link: "#" },
              { label: "Careers", link: "#" },
              { label: "Culture", link: "#" },
              { label: "Investor Relations", link: "#" },
              { label: "Product News", link: "#" },
              { label: "Site Maps", link: "#" },
            ]}
          />

          <FooterColumn
            title="Leadership and Governance"
            items={[
              { label: "Leadership", link: "#" },
              { label: "Board of Directors", link: "#" },
              { label: "Awards and Recognition", link: "#" },
              { label: "Partnerships", link: "#" },
              { label: "Community Engagement", link: "#" },
              { label: "Sustainability", link: "#" },
            ]}
          />

          <FooterColumn
            title="Company Overview"
            items={[
              { label: "History", link: "#" },
              { label: "Milestones", link: "#" },
              { label: "Founding Principles", link: "#" },
              { label: "Company Structure", link: "#" },
              { label: "Global Presence", link: "#" },
              { label: "Industry Recognition", link: "#" },
            ]}
          />

          <FooterColumn
            title="Financial Information"
            items={[
              { label: "Financial Reports", link: "#" },
              { label: "Annual Reports", link: "#" },
              { label: "Stock Information", link: "#" },
              { label: "IR Calendar", link: "#" },
              { label: "SEC Filings", link: "#" },
              {
                label: "Contact Investor Relations",
                link: "#",
              },
            ]}
          />
        </div>

        {/* Social Media Links */}
        <SocialLinks />

        {/* Language Selection */}
        <LanguageSelector />

        {/* Copyright Information */}
        <CopyrightInfo />
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, items }) => (
  <div className="">
    <h3 className="text-white text-lg font-bold mb-4 ">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index}>
          <a
            href={item.link}
            className="hover:text-blue-500 transition-colors duration-200"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialLinks = () => (
  <div className="flex justify-between items-center mt-8 border-t border-gray-700 pt-4">
    <div className="space-x-4 flex">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-2xl hover:text-blue-500 transition-colors duration-200" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-2xl hover:text-blue-500 transition-colors duration-200" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-2xl hover:text-blue-500 transition-colors duration-200" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-2xl hover:text-blue-500 transition-colors duration-200" />
      </a>
    </div>
  </div>
);

const LanguageSelector = () => (
  <div className="flex justify-between items-center mt-4 space-x-2">
    <label htmlFor="language" className="text-sm">
      Language:
    </label>
    <select id="language" className="bg-gray-800 text-white border-none">
      <option value="">English</option>
      {/* Add more languages as needed */}
    </select>
  </div>
);

const CopyrightInfo = () => (
  <div className="mt-8 text-sm text-center">
    <p>&copy; 2024 FixmyBug.com, Inc. All rights reserved.</p>
    <div className="space-x-2 flex flex-wrap mt-4">
      <a href="#" className="hover:underline">
        Terms
      </a>
      <a href="#" className="hover:underline">
        Privacy
      </a>
      <a href="#" className="hover:underline">
        U.S. State Privacy
      </a>
      <a href="#" className="hover:underline">
        Copyright
      </a>
      <a href="#" className="hover:underline">
        Cookies
      </a>
    </div>
  </div>
);

export default Footer;
