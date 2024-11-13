"use client";

import Slider from 'react-slick';
import styles from '../styles/MemeGallery.module.css';

const memes = [
  { src: '/images/meme1.png', name: 'MOLLIE' },
  { src: '/images/meme2.png', name: 'MEMEVOTE' },
  { src: '/images/meme3.png', name: 'CIRCUITS' },
  { src: '/images/meme4.png', name: 'MEGAVOT' },
  { src: '/images/meme5.png', name: 'MERCH' },
  { src: '/images/meme6.png', name: 'LAUGHVOTE' },
  // Add more meme images and names here
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

const MemeGallery = () => {
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
    <section className="p-10 bg-gray-900 text-white bg-image"id='merch'>
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
                <button className={styles.voteButton}>Vote</button>
              </div>
            </div>
            <p className="text-center mt-2 font-semibold text-cyan-300">{meme.name}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default MemeGallery;
