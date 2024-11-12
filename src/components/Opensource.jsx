import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const BugCard = ({
  id,
  title,
  description,
  postedBy,
  postedDate,
  bountyAmount,
  bountyStatus,
  onActionClick,
}) => (
  <div
    className="bg-white rounded-lg shadow-md p-6 h-full relative overflow-hidden transition-all duration-300 ease-in-out"
    style={{ filter: "blur(5px)" }}
  >
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-2">{description}</p>
    <div className="flex justify-between items-center">
      <span className="font-semibold">Posted by:</span>
      <span>{postedBy}</span>
    </div>
    <div className="flex justify-between items-center mt-2">
      <span className="font-semibold">Posted on:</span>
      <span>{postedDate}</span>
    </div>
    <div className="mt-4 flex justify-between items-center">
      <span className="font-semibold">Bounty:</span>
      <span
        className={`text-${
          bountyStatus === "active"
            ? "green"
            : bountyStatus === "claimed"
            ? "blue"
            : "gray"
        }`}
      >
        ${bountyAmount} {bountyStatus === "claimed" ? "(Claimed)" : ""}
      </span>
    </div>
    <button
      disabled
      onClick={onActionClick}
      className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out transform scale-110 hover:scale-125"
    >
      Select & Sign Up
    </button>
  </div>
);

const BugListSlider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBugId, setSelectedBugId] = useState(null);

  const bugs = [
    {
      id: 1,
      title: "Critical Security Vulnerability",
      description:
        "Fix a critical security issue in our authentication system.",
      postedBy: "John Doe",
      postedDate: "Yesterday",
      bountyAmount: 1000,
      bountyStatus: "active",
    },
    {
      id: 2,
      title: "Performance Optimization",
      description: "Improve the loading speed of our homepage by 30%.",
      postedBy: "Jane Smith",
      postedDate: "2 Days Ago",
      bountyAmount: 800,
      bountyStatus: "claimed",
    },
    {
      id: 3,
      title: "Responsive Design Issue",
      description: "Ensure proper rendering of our layout on mobile devices.",
      postedBy: "Bob Johnson",
      postedDate: "Last Week",
      bountyAmount: 1200,
      bountyStatus: "active",
    },
    {
      id: 4,
      title: "UI Bug",
      description: "Fix overlapping text on smaller screens.",
      postedBy: "Alice Brown",
      postedDate: "3 Days Ago",
      bountyAmount: 500,
      bountyStatus: "active",
    },
    {
      id: 4,
      title: "UI Bug",
      description: "Fix overlapping text on smaller screens.",
      postedBy: "Alice Brown",
      postedDate: "3 Days Ago",
      bountyAmount: 500,
      bountyStatus: "active",
    },
    {
      id: 4,
      title: "UI Bug",
      description: "Fix overlapping text on smaller screens.",
      postedBy: "Alice Brown",
      postedDate: "3 Days Ago",
      bountyAmount: 500,
      bountyStatus: "active",
    },
    {
      id: 4,
      title: "UI Bug",
      description: "Fix overlapping text on smaller screens.",
      postedBy: "Alice Brown",
      postedDate: "3 Days Ago",
      bountyAmount: 500,
      bountyStatus: "active",
    },
    {
      id: 4,
      title: "UI Bug",
      description: "Fix overlapping text on smaller screens.",
      postedBy: "Alice Brown",
      postedDate: "3 Days Ago",
      bountyAmount: 500,
      bountyStatus: "active",
    },
    {
      id: 4,
      title: "UI Bug",
      description: "Fix overlapping text on smaller screens.",
      postedBy: "Alice Brown",
      postedDate: "3 Days Ago",
      bountyAmount: 500,
      bountyStatus: "active",
    },
    {
      id: 4,
      title: "UI Bug",
      description: "Fix overlapping text on smaller screens.",
      postedBy: "Alice Brown",
      postedDate: "3 Days Ago",
      bountyAmount: 500,
      bountyStatus: "active",
    },
    {
      id: 4,
      title: "UI Bug",
      description: "Fix overlapping text on smaller screens.",
      postedBy: "Alice Brown",
      postedDate: "3 Days Ago",
      bountyAmount: 500,
      bountyStatus: "active",
    },
    {
      id: 4,
      title: "UI Bug",
      description: "Fix overlapping text on smaller screens.",
      postedBy: "Alice Brown",
      postedDate: "3 Days Ago",
      bountyAmount: 500,
      bountyStatus: "active",
    },
    {
      id: 4,
      title: "UI Bug",
      description: "Fix overlapping text on smaller screens.",
      postedBy: "Alice Brown",
      postedDate: "3 Days Ago",
      bountyAmount: 500,
      bountyStatus: "active",
    },
    {
      id: 4,
      title: "UI Bug",
      description: "Fix overlapping text on smaller screens.",
      postedBy: "Alice Brown",
      postedDate: "3 Days Ago",
      bountyAmount: 500,
      bountyStatus: "active",
    },
  ];

  const handleActionClick = (id) => {
    setSelectedBugId(id);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center">Available Bugs</h2>
        <h2 className="lg:text-3xl md:text-3xl sm:text-xl text-xs font-bold text-center mb-8">
          SignUp as <span className="text-[#0c4a6e]"> BugFixer </span> to view
          Bugs
        </h2>
        <div className=" mx-auto min-w-[18rem]">
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 2, // 1 card on small screens (640px and below)
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3, // 3 cards on larger screens (1024px and above)
                spaceBetween: 30,
              },
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {bugs.map((bug) => (
              <SwiperSlide key={bug.id}>
                <div className="relative group bg-white rounded-lg shadow-md p-6 h-full">
                  <BugCard
                    {...bug}
                    onActionClick={() => handleActionClick(bug.id)}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default BugListSlider;
