import React, { useState, useEffect, useRef } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LandingPage = () => {
  const [bugs, setBugs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategory1, setSelectedCategory1] = useState(null);

  // Create refs for each category section
  const FrontendRef = useRef(null);
  const BackendRef = useRef(null);
  const DeploymentRef = useRef(null);
  const NextjsRef = useRef(null);
  const DockerRef = useRef(null);
  const SpringBootRef = useRef(null);
  const DevopsRef = useRef(null);
  const SRERef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setBugs([
        // Frontend Bugs
        {
          id: 1,
          title: "UI Overflow Issue",
          description: "The content overflows the container on mobile screens.",
          postedBy: "Alice Smith",
          postedDate: "2 days ago",
          bountyAmount: 150,
          bountyStatus: "active",
          category: "Docker",
        },
        {
          id: 2,
          title: "Button Click Not Responsive",
          description: "Button clicks are not being registered on Safari.",
          postedBy: "Bob Johnson",
          postedDate: "1 day ago",
          bountyAmount: 200,
          bountyStatus: "active",
          category: "Docker",
        },
        {
          id: 3,
          title: "Image Not Loading",
          description: "Images are not loading on slow networks.",
          postedBy: "Charlie Brown",
          postedDate: "3 days ago",
          bountyAmount: 120,
          bountyStatus: "active",
          category: "SpringBoot",
        },
        {
          id: 4,
          title: "CSS Flexbox Alignment",
          description: "Flexbox alignment issues in the footer.",
          postedBy: "David Wilson",
          postedDate: "1 week ago",
          bountyAmount: 100,
          bountyStatus: "active",
          category: "SpringBoot",
        },
        {
          id: 5,
          title: "Modal Not Closing",
          description: "The modal does not close on clicking outside.",
          postedBy: "Eva Davis",
          postedDate: "5 days ago",
          bountyAmount: 130,
          bountyStatus: "active",
          category: "Devops",
        },
        {
          id: 6,
          title: "Form Validation Errors",
          description: "Form validation messages are not displayed correctly.",
          postedBy: "Frank Harris",
          postedDate: "2 days ago",
          bountyAmount: 170,
          bountyStatus: "active",
          category: "Devops",
        },
        {
          id: 7,
          title: "Broken Links",
          description: "Several links on the homepage lead to 404 errors.",
          postedBy: "Grace Martinez",
          postedDate: "4 days ago",
          bountyAmount: 90,
          bountyStatus: "active",
          category: "SRE",
        },
        {
          id: 8,
          title: "Accessibility Issues",
          description: "Missing alt tags on images affecting screen readers.",
          postedBy: "Hannah Moore",
          postedDate: "1 week ago",
          bountyAmount: 200,
          bountyStatus: "active",
          category: "Frontend",
        },
        {
          id: 9,
          title: "Color Contrast Issues",
          description: "Low contrast ratio on several buttons.",
          postedBy: "Ian Lee",
          postedDate: "3 days ago",
          bountyAmount: 120,
          bountyStatus: "active",
          category: "Frontend",
        },
        {
          id: 10,
          title: "Responsive Layout Problems",
          description: "Layout breaks on landscape orientation on mobile.",
          postedBy: "Jane Kim",
          postedDate: "2 weeks ago",
          bountyAmount: 150,
          bountyStatus: "active",
          category: "Frontend",
        },

        // Backend Bugs
        {
          id: 11,
          title: "Database Connection Timeout",
          description: "Connection to the database times out after 30 seconds.",
          postedBy: "Kevin Walker",
          postedDate: "1 day ago",
          bountyAmount: 300,
          bountyStatus: "active",
          category: "Backend",
        },
        {
          id: 12,
          title: "API Response Delay",
          description: "API response time exceeds acceptable limits.",
          postedBy: "Laura Hall",
          postedDate: "3 days ago",
          bountyAmount: 250,
          bountyStatus: "active",
          category: "Backend",
        },
        {
          id: 13,
          title: "Data Validation Errors",
          description: "Incorrect data is saved to the database.",
          postedBy: "Mark Allen",
          postedDate: "2 days ago",
          bountyAmount: 180,
          bountyStatus: "active",
          category: "Backend",
        },
        {
          id: 14,
          title: "Authentication Failure",
          description: "Users cannot log in due to authentication issues.",
          postedBy: "Nina Scott",
          postedDate: "1 week ago",
          bountyAmount: 400,
          bountyStatus: "active",
          category: "Backend",
        },
        {
          id: 15,
          title: "Email Notification Not Sent",
          description: "Email notifications are not being sent to users.",
          postedBy: "Oscar Young",
          postedDate: "4 days ago",
          bountyAmount: 220,
          bountyStatus: "active",
          category: "Backend",
        },
        {
          id: 16,
          title: "Session Expiration Bug",
          description: "Sessions are expiring too quickly.",
          postedBy: "Paula Wright",
          postedDate: "3 days ago",
          bountyAmount: 150,
          bountyStatus: "active",
          category: "Backend",
        },
        {
          id: 17,
          title: "Resource Not Found Error",
          description: "Certain resources return a 404 error.",
          postedBy: "Quincy Green",
          postedDate: "5 days ago",
          bountyAmount: 300,
          bountyStatus: "active",
          category: "Backend",
        },
        {
          id: 18,
          title: "Permission Denied Error",
          description:
            "Users are denied access to resources they should access.",
          postedBy: "Rita Adams",
          postedDate: "1 week ago",
          bountyAmount: 250,
          bountyStatus: "active",
          category: "Backend",
        },
        {
          id: 19,
          title: "Redundant API Endpoints",
          description: "Multiple API endpoints provide the same data.",
          postedBy: "Sam Nelson",
          postedDate: "3 days ago",
          bountyAmount: 200,
          bountyStatus: "active",
          category: "Backend",
        },
        {
          id: 20,
          title: "Data Integrity Issues",
          description: "Data corruption detected in the database.",
          postedBy: "Tina King",
          postedDate: "2 weeks ago",
          bountyAmount: 500,
          bountyStatus: "active",
          category: "Backend",
        },

        // Deployment Bugs
        {
          id: 21,
          title: "Deployment Script Failure",
          description: "Deployment script fails under certain conditions.",
          postedBy: "Uma Carter",
          postedDate: "1 day ago",
          bountyAmount: 350,
          bountyStatus: "active",
          category: "Deployment",
        },
        {
          id: 22,
          title: "Environment Variable Issues",
          description: "Environment variables not loaded in production.",
          postedBy: "Vera Wright",
          postedDate: "2 days ago",
          bountyAmount: 250,
          bountyStatus: "active",
          category: "Deployment",
        },
        {
          id: 23,
          title: "SSL Certificate Expiration",
          description: "SSL certificate is about to expire.",
          postedBy: "Will Howard",
          postedDate: "3 days ago",
          bountyAmount: 500,
          bountyStatus: "active",
          category: "Deployment",
        },
        {
          id: 24,
          title: "Server Configuration Error",
          description: "Incorrect server configurations lead to downtime.",
          postedBy: "Xena Torres",
          postedDate: "1 week ago",
          bountyAmount: 400,
          bountyStatus: "active",
          category: "Deployment",
        },
        {
          id: 25,
          title: "Cache Invalidation Problem",
          description: "Cache does not invalidate properly after updates.",
          postedBy: "Yara Foster",
          postedDate: "5 days ago",
          bountyAmount: 300,
          bountyStatus: "active",
          category: "Deployment",
        },
        {
          id: 26,
          title: "Load Balancer Issues",
          description: "Load balancer misconfigurations cause traffic issues.",
          postedBy: "Zachary Rivera",
          postedDate: "3 days ago",
          bountyAmount: 450,
          bountyStatus: "active",
          category: "Deployment",
        },

        // Next.js Bugs
        {
          id: 27,
          title: "Next.js Static Generation Failure",
          description: "Static generation fails for certain pages.",
          postedBy: "Abigail Lee",
          postedDate: "2 days ago",
          bountyAmount: 320,
          bountyStatus: "active",
          category: "Nextjs",
        },
        {
          id: 28,
          title: "Route Not Found Error",
          description: "Dynamic routes return a 404 error.",
          postedBy: "Benjamin Hall",
          postedDate: "1 week ago",
          bountyAmount: 250,
          bountyStatus: "active",
          category: "Nextjs",
        },
        {
          id: 29,
          title: "Image Optimization Issues",
          description: "Images are not optimized for Next.js.",
          postedBy: "Clara Lee",
          postedDate: "3 days ago",
          bountyAmount: 180,
          bountyStatus: "active",
          category: "Nextjs",
        },
        {
          id: 30,
          title: "Internationalization Bug",
          description: "Next.js i18n routing not functioning as expected.",
          postedBy: "Derek Brown",
          postedDate: "2 days ago",
          bountyAmount: 400,
          bountyStatus: "active",
          category: "Nextjs",
        },
        {
          id: 31,
          title: "API Route Timeout",
          description: "API routes timeout unexpectedly.",
          postedBy: "Emily White",
          postedDate: "1 day ago",
          bountyAmount: 220,
          bountyStatus: "active",
          category: "Nextjs",
        },
        {
          id: 32,
          title: "Link Prefetching Issues",
          description: "Links do not prefetch correctly in Next.js.",
          postedBy: "Freddie Green",
          postedDate: "3 days ago",
          bountyAmount: 160,
          bountyStatus: "active",
          category: "Nextjs",
        },
        {
          id: 33,
          title: "Page Load Performance Issues",
          description: "Certain pages take too long to load.",
          postedBy: "Grace Williams",
          postedDate: "2 weeks ago",
          bountyAmount: 300,
          bountyStatus: "active",
          category: "Nextjs",
        },
        {
          id: 34,
          title: "Hydration Errors",
          description: "Hydration errors occurring in specific components.",
          postedBy: "Harry Martinez",
          postedDate: "5 days ago",
          bountyAmount: 400,
          bountyStatus: "active",
          category: "Nextjs",
        },
        {
          id: 35,
          title: "Missing TypeScript Types",
          description: "Missing TypeScript types in Next.js components.",
          postedBy: "Ivy King",
          postedDate: "2 days ago",
          bountyAmount: 200,
          bountyStatus: "active",
          category: "Nextjs",
        },
        {
          id: 36,
          title: "SEO Metadata Issues",
          description: "SEO metadata is not being generated correctly.",
          postedBy: "Jack Carter",
          postedDate: "1 day ago",
          bountyAmount: 180,
          bountyStatus: "active",
          category: "Nextjs",
        },

        // Additional Bugs
        {
          id: 37,
          title: "Cross-Browser Compatibility Issue",
          description: "UI behaves differently on Firefox compared to Chrome.",
          postedBy: "Kara Bell",
          postedDate: "1 day ago",
          bountyAmount: 250,
          bountyStatus: "active",
          category: "General",
        },
        {
          id: 38,
          title: "Memory Leak in App",
          description:
            "The app shows signs of memory leaks during heavy usage.",
          postedBy: "Liam Scott",
          postedDate: "2 days ago",
          bountyAmount: 400,
          bountyStatus: "active",
          category: "General",
        },
        {
          id: 39,
          title: "Security Vulnerability Found",
          description: "Potential XSS vulnerability in user input fields.",
          postedBy: "Mia Adams",
          postedDate: "3 days ago",
          bountyAmount: 600,
          bountyStatus: "active",
          category: "General",
        },
        {
          id: 40,
          title: "API Rate Limiting Issue",
          description: "Rate limiting not working as intended for API calls.",
          postedBy: "Noah Brown",
          postedDate: "1 week ago",
          bountyAmount: 350,
          bountyStatus: "active",
          category: "General",
        },
        {
          id: 41,
          title: "Search Functionality Bug",
          description:
            "Search does not return expected results under certain queries.",
          postedBy: "Olivia Green",
          postedDate: "1 week ago",
          bountyAmount: 200,
          bountyStatus: "active",
          category: "General",
        },
        {
          id: 42,
          title: "Infinite Scroll Not Working",
          description: "Infinite scroll feature does not load more content.",
          postedBy: "Paul Harris",
          postedDate: "2 days ago",
          bountyAmount: 150,
          bountyStatus: "active",
          category: "General",
        },
        {
          id: 43,
          title: "Form Submission Fails",
          description: "Form submissions fail under certain conditions.",
          postedBy: "Quincy Lee",
          postedDate: "2 days ago",
          bountyAmount: 250,
          bountyStatus: "active",
          category: "General",
        },
        {
          id: 44,
          title: "User Interface Freeze",
          description: "The UI freezes during heavy data operations.",
          postedBy: "Rachel Brown",
          postedDate: "3 days ago",
          bountyAmount: 300,
          bountyStatus: "active",
          category: "General",
        },
        {
          id: 45,
          title: "Legacy Code Issues",
          description:
            "Legacy code causing compatibility issues with new features.",
          postedBy: "Sam King",
          postedDate: "1 month ago",
          bountyAmount: 250,
          bountyStatus: "active",
          category: "General",
        },
        {
          id: 46,
          title: "Localization Problems",
          description: "Translation strings are not displaying correctly.",
          postedBy: "Tina Martinez",
          postedDate: "1 week ago",
          bountyAmount: 220,
          bountyStatus: "active",
          category: "General",
        },
        {
          id: 47,
          title: "Code Refactoring Needed",
          description: "Code needs refactoring for better maintainability.",
          postedBy: "Uma Lee",
          postedDate: "2 weeks ago",
          bountyAmount: 180,
          bountyStatus: "active",
          category: "General",
        },
        {
          id: 48,
          title: "Component Reusability Issue",
          description: "Components are not reusable across the application.",
          postedBy: "Victor Harris",
          postedDate: "1 day ago",
          bountyAmount: 240,
          bountyStatus: "active",
          category: "General",
        },
        {
          id: 49,
          title: "Error Logging Not Working",
          description: "Error logging is not capturing all errors.",
          postedBy: "Wendy White",
          postedDate: "3 days ago",
          bountyAmount: 200,
          bountyStatus: "active",
          category: "General",
        },
        {
          id: 50,
          title: "Legacy Browser Support",
          description: "Issues with supporting legacy browsers.",
          postedBy: "Xander Scott",
          postedDate: "1 month ago",
          bountyAmount: 300,
          bountyStatus: "active",
          category: "General",
        },
      ]);
    }, []);
  }, []);

  const categories1 = ["Frontend", "Backend", "Deployment", "Nextjs"];
  const categories2 = ["Docker", "SpringBoot", "Devops", "SRE"];

  const scrollToCategory = (category) => {
    switch (category.toLowerCase()) {
      case "frontend":
        FrontendRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        break;
      case "backend":
        BackendRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        break;
      case "deployment":
        DeploymentRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        break;
      case "nextjs":
        NextjsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        break;

      default:
        console.log(`Unknown category: ${category}`);
    }
  };
  const scrollToCategory1 = (category) => {
    switch (category.toLowerCase()) {
      case "DevopsRef":
        DevopsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        break;
      case "Docker":
        DockerRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        break;
      case "SpringBoot":
        SpringBootRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        break;
      case "SRE":
        SRERef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        break;

      default:
        console.log(`Unknown category: ${category}`);
    }
  };

  const BugSlider = ({ bugs }) => (
    <div className="w-[100rem] ">
      <Slider {...settings}>
        {bugs.map((bug) => (
          <div key={bug.id} className="">
            {" "}
            {/* Card padding */}
            <BugCard bug={bug} />
          </div>
        ))}
      </Slider>
    </div>
  );

  const BugCard = ({ bug }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
      <div
        className="relative p-4 gap-2 hover:shadow-lg transition-shadow duration-300 ease-in-out w-[16rem] h-[15rem] flex flex-col justify-between cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="bg-white p-4 gap-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out w-[16rem] h-[15rem] flex flex-col justify-between"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-2 truncate">
            {bug.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {bug.description.substring(0, 120)}...
          </p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-green-600 font-semibold">
              ${bug.bountyAmount}
            </span>
            <span
              className={`badge ${bug.bountyStatus.toLowerCase()} bg-opacity-50 backdrop-blur-sm`}
            >
              {bug.bountyStatus.charAt(0).toUpperCase() +
                bug.bountyStatus.slice(1)}
            </span>
          </div>
          <div className="mt-auto px-4 pb-2 flex space-x-4 items-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 ease-in-out hidden">
              Learn More
            </button>
            <div className="flex space-x-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6l3-3m3 3l3 3-3 3m-3-3v6"
                />
              </svg>
              <span className="text-xs text-gray-600">Open Source</span>
            </div>

            <div className="flex space-x-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6l3-3m3 3l3 3-3 3m-3-3v6"
                />
              </svg>
              <span className="text-xs text-gray-600">Community Supported</span>
            </div>
          </div>
        </motion.div>
      </div>
    );
  };

  const styles = `
.card-container {
  transition: transform 0.3s ease-in-out;
}

.card-content:hover {
  transform: scale(1.05);
}

.button-container {
  transition: opacity 0.3s ease-in-out;
}

.button-container:hover {
  opacity: 1;
}
`;

  const filteredBugs = selectedCategory
    ? bugs.filter((bug) => bug.category === selectedCategory)
    : bugs;
  const filteredBugs1 = selectedCategory1
    ? bugs.filter((bug) => bug.category === selectedCategory1)
    : bugs;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6, // Show 4 cards on larger screens
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    variableWidth: false, // Disable variable width
    centerMode: false, // Disable center mode
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 cards on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 cards on small screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 card on extra small screens
        },
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col"
    >
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center p-8 mt-20">
        <p className="text-lg text-gray-700 mb-12 max-w-3xl text-center">
          Connect with a community of developers to find, fix, and get rewarded
          for bugs on websites and applications.
        </p>

        <div className="mb-16 ">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
            Browse Bugs by Category
          </h2>
          <div className="flex justify-center flex-wrap gap-4 mb-8">
            {[...categories1, "All"].map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category === "All" ? null : category);
                  scrollToCategory(category.toLowerCase());
                }}
                className={`px-6 py-3 text-md font-medium rounded-full transition-all duration-300 ${
                  (selectedCategory === category && category !== "All") ||
                  (selectedCategory === null && category === "All")
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <BugSlider bugs={filteredBugs} />
        </div>
        <div className="mb-16 ">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
            Browse Bugs by Category
          </h2>
          <div className="flex justify-center flex-wrap gap-4 mb-8">
            {[...categories2, "All"].map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory1(category === "All" ? null : category);
                  scrollToCategory1(category.toLowerCase());
                }}
                className={`px-6 py-3 text-md font-medium rounded-full transition-all duration-300 ${
                  (selectedCategory1 === category && category !== "All") ||
                  (selectedCategory1 === null && category === "All")
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <BugSlider bugs={filteredBugs1} />
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default LandingPage;
