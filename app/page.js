"use client";

import { useState } from 'react';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import MemeGallery from './components/MemeGallery';
import Footer from './components/Footer';
import Loading from './components/Loading';
import UserPostedMeme from './components/UserPostedMeme';

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
            title="RoboRuth 12: The AI Meme Revolution - Home" 
            description="Discover the AI-powered meme journey with RoboRuth 12, exploring memes and more across the blockchain universe."
          />
          <Navbar />
          <Hero />
          <Story />
          <MemeGallery />
          {/* <UserPostedMeme/> */}
          <Footer />
        </>
      )}
    </>
  );
}
