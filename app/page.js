"use client";

import { useState } from 'react';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import MemeGallery from './components/MemeGallery';
import Footer from './components/Footer';
import Loading from './components/Loading';
// import UserPostedMeme from './components/UserPostedMeme';

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      {/* Loading screen */}
      {!loadingComplete && <Loading onFinish={() => setLoadingComplete(true)} />}

      {/* Main content with enhanced SEO */}
      {loadingComplete && (
        <>
          <SEO 
            title="RoboRuth 12: The AI Meme Revolution | Blockchain's Heroine"
            description="Meet RoboRuth 12, the AI-powered guardian of the meme-verse. Join her cosmic journey through the blockchain universe and be part of the meme revolution!"
            url="https://roboruth12.com"
            image="https://roboruth12-testing.vercel.app/image.png"
            keywords={["AI Meme Revolution", "RoboRuth 12", "Blockchain Heroine", "Decentralized Finance", "Crypto Memes", "Meme Warriors"]}
            og={{
              title: "RoboRuth 12: The Meme Guardian of Blockchain",
              type: "website",
              url: "https://roboruth12.com",
              image: "https://roboruth12-testing.vercel.app/image.png",
              description: "Join RoboRuth 12 and her Meme Warriors in a cosmic journey through the blockchain universe to decentralize finance and unlock the power of AI.",
              site_name: "RoboRuth 12",
            }}
            socialLinks={[
              "https://x.com/RoboRuth12",
              "https://t.me/RoboRuth12",
            ]}
          />

          <Navbar />
          <Hero />
          <Story />
          <MemeGallery />
          {/* <UserPostedMeme /> */}
          <Footer />
        </>
      )}
    </>
  );
}
