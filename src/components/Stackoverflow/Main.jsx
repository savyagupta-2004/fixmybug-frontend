import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import ChatRoom from "./ChatRoom";
const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="overflow-x-hidden bg-gray-100 min-h-[86rem] sm:mt-10 mt-14 lg:mt-0 md:mt-0  flex items-center justify-center">
        <ChatRoom />
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;
