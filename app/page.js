"use client"

import { useState } from 'react';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import MemeGallery from './components/MemeGallery';
import Footer from './components/Footer';
import Loading from './components/Loading';

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      {/** Show the Loading screen initially **/}
      {!loadingComplete && <Loading onFinish={() => setLoadingComplete(true)} />}

      {/** Once loading is complete, display the main content **/}
      {loadingComplete && (
        <>
          <SEO title="RoboRuth 12: The AI Meme Revolution" description="Join RoboRuth 12 in her cosmic journey across the blockchain universe!" />
          <Navbar />
          <Hero />
          <Story />
          <MemeGallery />
          <Footer />
        </>
      )}
    </>
  );
}
