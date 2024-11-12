import { useState } from "react";
import { MagicCard } from "react-magic-motion";
import "react-magic-motion/card.css";

function CloseFullscreenSvg() {
  return (
    <>
      <rect x="1" y="16" width="14" height="15" stroke="currentColor" strokeWidth="2" />
      <path d="M26 5L18 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 13H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 13V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="1" y="1" width="30" height="30" stroke="currentColor" strokeWidth="2" />
    </>
  );
}

function OpenFullscreenSvg() {
  return (
    <>
      <rect x="1" y="8" width="21" height="23" stroke="currentColor" strokeWidth="2" />
      <path d="M7 24L15 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M15 16H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M15 16V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="1" y="1" width="30" height="30" stroke="currentColor" strokeWidth="2" />
    </>
  );
}

function CardContent({ title, imageUrl, description, isCardExpanded, toggleExpand }) {
  return (
    <>
    
    <div
      style={{
        width: isCardExpanded ? "40rem" : "17rem",
        height: "20rem", // Fixed height for the card
        gap: "1rem",
        display: "flex",
        flexDirection: "column",
        padding: "1.35rem 1.3rem",
        color: isCardExpanded ? "black" : "currentColor",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        overflow: "hidden", // Hide overflow if content exceeds
      }}
    >
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        <h3 style={{ fontWeight: 600, fontSize: "1.4em" }}>{title}</h3>
        <button
          style={{ position: "absolute", right: 0, zIndex: 9999 }}
          onClick={(e) => {
            e.stopPropagation();
            toggleExpand();
          }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            {isCardExpanded ? <CloseFullscreenSvg /> : <OpenFullscreenSvg />}
          </svg>
        </button>
      </div>
      <div style={{ overflowY: "auto", flexGrow: 1 }}>
        <img
          style={{
            width: isCardExpanded ? "24rem" : "17.5rem",
            height: isCardExpanded ? "auto" : "100%", // Adjust height for expanded state
            objectFit: isCardExpanded ? "contain" : "cover", // Maintain aspect ratio
          }}
          alt={title}
          src={imageUrl}
        />
        {isCardExpanded && (
          <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h4 style={{ fontSize: "1.2em", fontWeight: 600 }}>{title}</h4>
            <p>{description}</p>
          </section>
        )}
      </div>
    </div>
    </>
  );
}


export default function ExpandableCardCollection() {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const cardsData = [
    {
      title: "Quick Fix Pro",
      imageUrl: "../Images/quixk.webp",
      description:
        "Need a small issue resolved fast? Our Quick Fix Pro team delivers rapid solutions for minor bugs and glitches. Perfect for short-term projects or quick fixes.",
    },
    {
      title: "Bug Busters Elite",
      imageUrl: "../Images/team.webp",
      description:
        "Our elite team of full-time bug fixers tackles complex, long-term issues with precision and dedication. Ideal for large-scale projects requiring sustained focus.",
    },
    // {
    //   title: "Solution Squad",
    //   imageUrl: "../Images/swift.webp",
    //   description:
    //     "A mix of part-time and full-time experts ready to tackle a variety of bug types. Great for projects needing flexibility and quick turnaround times.",
    // },
    {
      title: "Precision Team",
      imageUrl: "../Images/pro.webp",
      description:
        "Specialized in finding and fixing hard-to-reach bugs. Our team combines cutting-edge tools and expertise to deliver precise solutions for even the most elusive issues.",
    },
    {
      title: "Quality Assurance",
      imageUrl: "../Images/quality1.webp",
      description:
        "Dedicated to ensuring every aspect of your project meets high standards. Our QA specialists perform thorough testing to guarantee a flawless final product.",
    },
  ];
  return (
    <>
    <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl font-bold text-center mt-20 mb-10">Why do we <span className="text-[#0c4a6e]"> Stand Out ?</span></h1>
    <div className="flex flex-wrap gap-4 justify-center mt-6 ">
      {cardsData.map((card, index) => (
        <MagicCard
          key={index}
          isCardExpanded={expandedCardIndex === index}
          onBackgroundFadeClick={() => setExpandedCardIndex(null)}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <div onClick={() => setExpandedCardIndex(expandedCardIndex === index ? null : index)}>
            <CardContent
              title={card.title}
              imageUrl={card.imageUrl}
              description={card.description}
              isCardExpanded={expandedCardIndex === index}
              toggleExpand={() => setExpandedCardIndex(expandedCardIndex === index ? null : index)}
            />
          </div>
        </MagicCard>
      ))}
    </div>
    </>
  );
}
