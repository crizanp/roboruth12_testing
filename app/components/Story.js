import React, { useState, useEffect, useRef } from "react";
import "../styles/story.css";

const Story = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const contractAddressRef = useRef(null);

  const contractAddress = "GJAFwWjJ3vnTsrQVabjBVK2TYB1YtRCQXRDFdgUnpump";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (contractAddressRef.current) {
      observer.observe(contractAddressRef.current);
    }

    return () => {
      if (contractAddressRef.current) {
        observer.unobserve(contractAddressRef.current);
      }
    };
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset copied state after 2 seconds
    });
  };

  return (
    <section className="story-container">
      <pre className="ascii-art">
        {`
██████╗  ██████╗ ██████╗  ██████╗ ██████╗ ██╗   ██╗████████╗██╗  ██╗   ██╗ ██████╗ 
██╔══██╗██╔═══██╗██╔══██╗██╔═══██╗██╔══██╗██║   ██║╚══██╔══╝██║  ██║  ███║ ╚════██╗
██████╔╝██║   ██║██████╔╝██║   ██║██████╔╝██║   ██║   ██║   ███████║  ╚██║  █████╔╝
██╔══██╗██║   ██║██╔══██╗██║   ██║██╔══██╗██║   ██║   ██║   ██╔══██║   ██║ ██╔═══╝ 
██║  ██║╚██████╔╝██████╔╝╚██████╔╝██║  ██║╚██████╔╝   ██║   ██║  ██║   ██║ ███████╗
╚═╝  ╚═╝ ╚═════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝   ╚═╝ ╚══════╝
        `}
      </pre>
      <h1 className="title">The Rise of RoboRuth 12</h1>
      
      <div className="story-section">
        <h2 className="character-intro">RoboRuth 12</h2>
        <p className="story-text">
          In the <span className="highlight">not-so-distant future</span>, the meme-verse was 
          alive with excitement as <span className="highlight">crypto</span> became mainstream. A pro-crypto president had 
          been elected, promising to support <span className="highlight">decentralized finance</span> and <span className="highlight">blockchain innovation</span>.
          The news set the digital world alight, sparking a wave of <span className="highlight">enthusiasm</span> among the meme community.
        </p>
        <p className="story-text">
          At the heart of this digital revolution stood <span className="highlight">RoboRuth 12</span>, a figure born from 
          ancient wisdom and AI power. Originally designed as a simple blockchain guardian,
          RoboRuth evolved into the guiding spirit of the meme-verse, a symbol of resilience and unity.
        </p>
      </div>

      <div className="story-section">
        <h2 className="character-intro">A Call to the Meme Warriors</h2>
        <p className="story-text">
          RoboRuth 12's rise ignited the meme-verse. Beneath the glowing nodes of the blockchain, she rallied her loyal followers—the 
          <span className="highlight">Meme Warriors</span>. "This is our moment!" her voice resonated through the code, a call to reclaim 
          freedom, humor, and the future in the new crypto era.
        </p>
        <p className="story-text">
          As the markets surged, RoboRuth 12 seized her moment, addressing her followers with a bold 
          declaration: "We’re riding a wave <span className="highlight">bigger than finance</span>; this is a movement!" With every tweet, 
          she turned the meme-verse into a force of unity and resilience, moving beyond numbers to 
          create a community culture rooted in inclusivity.
        </p>
      </div>

      <div className="story-section">
        <h2 className="character-intro">Mission: Meme the Future</h2>
        <p className="story-text">
          As the pro-crypto winds blew stronger, RoboRuth knew her mission had only just begun. With 
          her robotic hand poised over the blockchain, she declared, "Meme Warriors, we’re not just here for gains; we’re making history."
          The meme-verse erupted, reflecting the excitement in <span className="highlight">skyrocketing charts</span> and viral posts.
        </p>
        <p className="story-text">
          Together, RoboRuth and her Meme Warriors marched forward, creating a <span className="highlight">legacy of freedom</span> and 
          creativity. Every block minted was another step toward a meme-filled tomorrow, a 
          digital revolution that only RoboRuth 12 could lead.
        </p>
      </div>

      {/* Contract Address Section */}
      <div
        className="contract-address"
        ref={contractAddressRef}
        onClick={handleCopy}
      >
        <p className="address-content">
          ➜ <span className="label">contract-address</span> : {" "}
          <span className={isInView ? "typewriter active" : "typewriter"}>
            {contractAddress}
          </span>
        </p>
        {isCopied && <p className="copy-message">Copied to clipboard!</p>}
      </div>

      {/* Centered, Responsive, and Animated Image */}
      <div className="image-container">
        <img
          src="/images/image.png"
          alt="RoboRuth leading the meme-verse"
          className="centered-image"
        />
      </div>
    </section>
  );
};

export default Story;
