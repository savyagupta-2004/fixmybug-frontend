import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";

import Footer from "./shared/Footer";
// import useGetAllJobs from "@/hooks/useGetAllJobs";

import { useNavigate } from "react-router-dom";
import Latestbugs from "./Latestbugs";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#E6E6E6] min-h-[250vh]">
      <Navbar />

      <HeroSection />
      {/* <CategoryCarousel /> */}

      <Latestbugs />

      <Footer />
    </div>
  );
};

export default Home;
