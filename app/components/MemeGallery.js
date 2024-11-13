"use client";

import React, { useState } from 'react';
import Slider from 'react-slick';
import styles from '../styles/MemeGallery.module.css';

const memes = [
  { src: '/images/meme1.png', name: 'MOLLIE', description: 'The meme of MOLLIE leading the charge...' },
  { src: '/images/meme2.png', name: 'MEMEVOTE', description: 'MEMEVOTE brings the community together...' },
  { src: '/images/meme3.png', name: 'CIRCUITS', description: 'CIRCUITS represents the connectivity of RoboRuth...' },
  { src: '/images/meme4.png', name: 'MEGAVOT', description: 'MEGAVOT is a symbol of unity in the meme-verse...' },
  { src: '/images/meme5.png', name: 'MERCH', description: 'MERCH represents the merging of memes and culture...' },
  { src: '/images/meme6.png', name: 'LAUGHVOTE', description: 'LAUGHVOTE embodies the humor and spirit...' },
  // Add more meme details here
];

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={`${styles.arrow} ${styles.nextArrow}`} onClick={onClick}>
      ▶
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={`${styles.arrow} ${styles.prevArrow}`} onClick={onClick}>
      ◀
    </div>
  );
};

// Modal Component
const Modal = ({ meme, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={meme.src} alt={meme.name} className="rounded mb-4" />
        <h2 className="text-2xl font-bold text-center mb-2">{meme.name}</h2>
        <p className="text-center text-gray-300">{meme.description}</p>
        <button onClick={onClose} className={styles.closeButton}>Close</button>
      </div>
    </div>
  );
};

const MemeGallery = () => {
  const [selectedMeme, setSelectedMeme] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="p-10 bg-gray-900 text-white" id='merch'>
      <h2 className="text-3xl font-bold text-center mb-6 neon-text">Meme Gallery</h2>
      <Slider {...settings}>
        {memes.map((meme, index) => (
          <div key={index} className="p-2">
            <div className={styles.memeCard}>
              <img
                src={meme.src}
                alt={meme.name}
                className="w-full h-full object-cover rounded"
              />
              <div className={styles.overlay}>
                <p className="text-lg font-bold text-center">Join the RoboRuth Revolution!</p>
                <button className={styles.voteButton} onClick={() => setSelectedMeme(meme)}>Explore</button>
              </div>
            </div>
            <p className="text-center mt-2 font-semibold text-cyan-300">{meme.name}</p>
          </div>
        ))}
      </Slider>

      {selectedMeme && <Modal meme={selectedMeme} onClose={() => setSelectedMeme(null)} />}
    </section>
  );
};

export default MemeGallery;
