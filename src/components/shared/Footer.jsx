import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
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
              { label: "Webinars", link: "/soon" },
              { label: "Orientations", link: "soon" },
              { label: "AI Chatbot", link: "soon" },
              { label: "Collaboration", link: "soon" },
              { label: "Analytics", link: "/signup-partTime" },
              { label: "Buisiness Affiliates", link: "soon" },
            ]}
          />

          <FooterColumn
            title="FixmyBug for"
            items={[
              { label: "Enterprise", link: "soon" },
              { label: "Small Business", link: "soon" },
              { label: "Creative Professionals", link: "soon" },
              { label: "Educators", link: "soon" },
              { label: "Marketers", link: "soon" },
              { label: "Corporate Comms", link: "soon" },
              { label: "Learning and Development", link: "soon" },
              { label: "Healthcare", link: "soon" },
              { label: "Retail", link: "soon" },
              { label: "Financial Services", link: "soon" },
            ]}
          />

          {/* Solutions Column */}
          <FooterColumn
            title="Solutions"
            items={[
              { label: "FixmyBug Central", link: "soon" },
              { label: "FixmyBug Marketing", link: "soon" },
            ]}
          />

          {/* Resources Column */}
          <FooterColumn
            title="Resources"
            items={[
              { label: "Help Center", link: "Contact-us" },
              { label: "Contact Support", link: "/Contact-us" },
              { label: "Customer Stories", link: "soon" },
              { label: "Events & Webinars", link: "soon" },
              { label: "Blog", link: "soon" },
              { label: "Developers", link: "soon" },
              { label: "Guidelines", link: "soon" },
              { label: "FixmyBug Experts", link: "soon" },
              { label: "Watch", link: "soon" },
              { label: "Media Kit", link: "soon" },
              { label: "Integrations Hub", link: "soon" },
            ]}
          />

          {/* Company Column */}
          <FooterColumn
            title="Company"
            items={[
              { label: "About FixmyBug", link: "soon" },
              { label: "Careers", link: "soon" },
              { label: "Culture", link: "soon" },
              { label: "Investor Relations", link: "soon" },
              { label: "Product News", link: "soon" },
              { label: "Site Maps", link: "soon" },
            ]}
          />

          <FooterColumn
            title="Leadership and Governance"
            items={[
              { label: "Leadership", link: "soon" },
              { label: "Board of Directors", link: "soon" },
              { label: "Awards and Recognition", link: "soon" },
              { label: "Partnerships", link: "soon" },
              { label: "Community Engagement", link: "soon" },
              { label: "Sustainability", link: "soon" },
            ]}
          />

          <FooterColumn
            title="Company Overview"
            items={[
              { label: "History", link: "soon" },
              { label: "Milestones", link: "soon" },
              { label: "Founding Principles", link: "soon" },
              { label: "Company Structure", link: "soon" },
              { label: "Global Presence", link: "soon" },
              { label: "Industry Recognition", link: "soon" },
            ]}
          />

          <FooterColumn
            title="Financial Information"
            items={[
              { label: "Financial Reports", link: "soon" },
              { label: "Annual Reports", link: "soon" },
              { label: "Stock Information", link: "soon" },
              { label: "IR Calendar", link: "soon" },
              { label: "SEC Filings", link: "soon" },
              {
                label: "Contact Investor Relations",
                link: "soon",
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
      <a
        href="https://www.instagram.com/fixmybugtech/profilecard/?igsh=MTlpa2Q0M3pwM3N4eA=="
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="text-2xl hover:text-blue-500 transition-colors duration-200" />
      </a>
      {/* <a href="/soon" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-2xl hover:text-blue-500 transition-colors duration-200" />
      </a>
      <a href="/soon" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-2xl hover:text-blue-500 transition-colors duration-200" />
      </a> */}
      <a
        href="https://www.linkedin.com/in/-savyagupta/"
        target="_blank"
        rel="noopener noreferrer"
      >
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
    {/* <div className="space-x-2 flex flex-wrap mt-4">
      <a href="soon" className="hover:underline">
        Terms
      </a>
      <a href="soon" className="hover:underline">
        Privacy
      </a>
      <a href="soon" className="hover:underline">
        U.S. State Privacy
      </a>
      <a href="soon" className="hover:underline">
        Copyright
      </a>
      <a href="soon" className="hover:underline">
        Cookies
      </a>
    </div> */}
  </div>
);

export default Footer;
