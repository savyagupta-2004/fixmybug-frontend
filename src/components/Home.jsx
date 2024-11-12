import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import Footer from "./shared/Footer";
import Sidebar from "./shared/Sidebar";
import { useNavigate } from "react-router-dom";
import Latestbugs from "./Latestbugs";
import Searchbox from "./Searchbox";
import Bounty from "./Bounty";
import Opensource from "./Opensource";
import Benefits from "./Benefits";
import Hierapro from "./Hierapro";
import Fixes from "./Fixes";
import TrustedPlatform from "./Trustedplatfrom";
import AppPromo from "./ui/AppPromo";
import Testimonial from "./ui/Testimonial";
import Chatlanding from "./ui/Chatlanding";
import { ToastContainer, toast } from "react-toastify";
import WhyGoWithUs from "./ui/WhyGoWithUs";
import Trusted from "./ui/Trusted";
import Support from "./ui/Support";
import Info from "./ui/Info";
import ProfessionalHeroSection from "./ui/ProfessionalHeroSection";
import ApplyForFix from "./ApplyForFix";

const Home = () => {
  const navigate = useNavigate();
  const notify = (message, type = "default") => {
    toast(message, {
      type,
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "custom-toast",
    });
  };
  return (
    <>
      <style>{`
      .custom-toast {
        background-color: #333;
        color: #fff;
        border-radius: 8px;
      }

      .custom-toast .Toastify__toast--default {
        background-color: #333;
        color: #fff;
      }

      .custom-toast .Toastify__toast--success {
        background-color: #4caf50;
        color: #fff;
      }

      .custom-toast .Toastify__toast--error {
        background-color: #f44336;
        color: #fff;
      }

      .custom-toast .Toastify__close-button {
        color: white;
      }
    `}</style>
      <div className="bg-[#E6E6E6] overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <Trusted />
        <Opensource />

        <Info />
        <Hierapro />
        {/* <ProfessionalHeroSection /> */}
        <Benefits />

        <Bounty />
        <TrustedPlatform />
        <ApplyForFix></ApplyForFix>
        <Testimonial />
        <Searchbox notify={notify} />
        {/* <AppPromo /> */}
        <Fixes />
        <Latestbugs />
        {/* <Chatlanding /> */}
        <Support />
        <WhyGoWithUs />

        <Footer />
      </div>
    </>
  );
};

export default Home;
