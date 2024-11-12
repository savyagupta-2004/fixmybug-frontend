import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DomainSearch = ({ notify }) => {
  const [domain, setDomain] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/signup-partTime");
    notify(`Signup to view content:${domain}`);
  };

  return (
    <div className="bg-[#b3cfcf] py-12 h-[25rem] flex items-center mb-20 mt-20 border border-black">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">
          It all starts with That
          <span className="text-[#0c4a6e]"> annoying</span> Bug
        </h2>
        <p className="text-[22px] mb-8">Get rid of that bug now!</p>

        <form
          onSubmit={handleSearch}
          className="max-w-md mx-auto flex items-center"
        >
          <input
            type="text"
            placeholder="Find your perfect BugFixer"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
          <button
            type="submit"
            className="px-6 py-2 bg-black text-white font-semibold rounded-r-md hover:bg-gray-800 transition-colors"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default DomainSearch;
