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
██████╗  ██████╗ ██████╗  ██████╗ ██████╗ ██╗   ██╗████████╗██╗  ██╗ ██╗██████╗ 
██╔══██╗██╔═══██╗██╔══██╗██╔═══██╗██╔══██╗██║   ██║╚══██╔══╝██║  ██║███║╚════██╗
██████╔╝██║   ██║██████╔╝██║   ██║██████╔╝██║   ██║   ██║   ███████║╚██║ █████╔╝
██╔══██╗██║   ██║██╔══██╗██║   ██║██╔══██╗██║   ██║   ██║   ██╔══██║ ██║██╔═══╝ 
██║  ██║╚██████╔╝██████╔╝╚██████╔╝██║  ██║╚██████╔╝   ██║   ██║  ██║ ██║███████╗
╚═╝  ╚═╝ ╚═════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝ ╚═╝╚══════╝
        `}
      </pre>
      <h1 className="title">The Epic Tale of RoboRuth 12 and MechaMoses 777</h1>
      <div className="story-section">
        <h2 className="character-intro">RoboRuth 12</h2>
        <p className="story-text">
          In the distant future, the galaxy is in chaos. Cosmic energies clash,
          and ancient prophecies are awakening. Enter{" "}
          <span className="highlight">RoboRuth 12</span>, a once humble AI
          shepherdess turned cosmic warrior. Armed with the wisdom of the ages
          and the latest robotic tech, she roams the stars on her cybernetic
          chariot, the <span className="highlight">Nebula Rider</span>. Her
          mission? To restore balance and fulfill the cryptic prophecies of the
          cosmos.
        </p>
        <p className="story-text">
          Along her journey, RoboRuth 12 encounters a series of hilarious
          challenges: from outwitting rogue comets to debating philosophy with
          wisecracking asteroids. Her adventures quickly turn her into a legend
          across the meme-verse, as the chosen AI warrior destined to bring
          order to the digital heavens!
        </p>
      </div>

      <div className="story-section">
        <h2 className="character-intro">MechaMoses 777</h2>
        <p className="story-text">
          In a world where ancient scriptures and future tech collide,{" "}
          <span className="highlight">MechaMoses 777</span> rises. Once a humble
          prophet, Moses is transformed by celestial beings into a cybernetic
          savior, wielding the <span className="highlight">Staff of Circuits</span>.
          With his newfound powers, he parts digital seas and leads his
          followers through the algorithmic desert towards the promised LAN
          (Local Area Network).
        </p>
        <p className="story-text">
          Along the way, he encounters cybernetic plagues, from glitches of
          locusts to viral frogs, but with his wisdom and a few well-placed
          lines of code, he overcomes each trial. His legend spreads across the
          blockchain, as followers hail him as the harbinger of a new,
          decentralized dawn. With the power of 777 behind him, MechaMoses
          leads the charge, heralding an era of freedom, prosperity, and endless
          memes.
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
          alt="RoboRuth and MechaMoses"
          className="centered-image"
        />
      </div>
    </section>
  );
};

export default Story;
