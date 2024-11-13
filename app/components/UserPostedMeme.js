"use client";

import React, { useState, useEffect } from 'react';
import styles from '../styles/UserPostedMeme.module.css';

const memes = [
  { id: 1, src: '/images/meme1.png', name: 'UserMeme1', description: 'A user-generated meme...' },
  { id: 2, src: '/images/meme2.png', name: 'UserMeme2', description: 'Another epic meme from the user...' },
  { id: 3, src: '/images/meme3.png', name: 'MOLLIE', description: 'The meme of MOLLIE leading the charge...' },
  { id: 4, src: '/images/meme4.png', name: 'MEMEVOTE', description: 'MEMEVOTE brings the community together...' },
  { id: 5, src: '/images/meme5.png', name: 'CIRCUITS', description: 'CIRCUITS represents the connectivity of RoboRuth...' },
  { id: 6, src: '/images/meme6.png', name: 'MEGAVOT', description: 'MEGAVOT is a symbol of unity in the meme-verse...' },
  { id: 7, src: '/images/meme1.png', name: 'MERCH', description: 'MERCH represents the merging of memes and culture...' },
  { id: 8, src: '/images/meme2.png', name: 'LAUGHVOTE', description: 'LAUGHVOTE embodies the humor and spirit...' },
  { id: 9, src: '/images/meme4.png', name: 'CIRCUITS', description: 'LAUGHVOTE embodies the humor and spirit...' },
  { id: 10, src: '/images/meme3.png', name: 'UserMeme2', description: 'LAUGHVOTE embodies the humor and spirit...' },
];

// Modal Component for Voting
const Modal = ({ meme, onClose, onVote, votedType }) => (
  <div className={styles.modalOverlay} onClick={onClose}>
    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
      <img src={meme.src} alt={meme.name} className="rounded mb-4" />
      <h2 className="text-2xl font-bold text-center mb-2">{meme.name}</h2>
      <p className="text-center text-gray-300">{meme.description}</p>

      <div className={styles.voteOptions}>
      <button
  className={`${styles.voteButton} ${styles.laughButton} ${votedType ? styles.disabledButton : ''}`}
  onClick={() => onVote(meme.id, 'laugh')}
  disabled={!!votedType}
>
  😂 Laugh
</button>
<button
  className={`${styles.voteButton} ${styles.clapButton} ${votedType ? styles.disabledButton : ''}`}
  onClick={() => onVote(meme.id, 'clap')}
  disabled={!!votedType}
>
  👍 Like
</button>
<button
  className={`${styles.voteButton} ${styles.downvoteButton} ${votedType ? styles.disabledButton : ''}`}
  onClick={() => onVote(meme.id, 'downvote')}
  disabled={!!votedType}
>
  👎 Dislike
</button>
      </div>

      <button onClick={onClose} className={styles.closeButton}>✖ Close</button>
    </div>
  </div>
);

const UserPostedMeme = () => {
  const [selectedMeme, setSelectedMeme] = useState(null);
  const [userVotes, setUserVotes] = useState({});
  const [showAll, setShowAll] = useState(false);
  const [vibeEffect, setVibeEffect] = useState(null); // 'laugh', 'like', 'dislike'
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const savedVotes = JSON.parse(localStorage.getItem("userVotes")) || {};
    setUserVotes(savedVotes);
  }, []);

  const handleVote = (memeId, voteType) => {
    if (userVotes[memeId]) return; // Prevent multiple votes on the same image

    const updatedVotes = { ...userVotes, [memeId]: voteType };
    setUserVotes(updatedVotes);
    localStorage.setItem("userVotes", JSON.stringify(updatedVotes));

    // Trigger vibe effect overlay based on vote type
    setVibeEffect(voteType);
    setTimeout(() => setVibeEffect(null), 400); // 400ms effect duration
  };

  const memesToShow = showAll ? memes : memes.slice(0, 10); // Show 10 initially

  return (
    <section className="p-10 bg-gray-900 text-white" id='user-memes'>
      <div className="flex items-center justify-center">
      <div className={styles.headerContainer}>
  <h2 className="text-3xl font-bold neon-text">User Posted Memes</h2>
  <span className={styles.infoIcon} onClick={() => setShowTooltip(!showTooltip)}>
    ℹ️
  </span>
  {showTooltip && (
    <div className={styles.tooltip}>
      Share your creative RoboRuth12 meme on platform X. The R12 team will review and, if selected, post it on our site. Community voting will determine the meme with the most positive feedback, and the creator will receive a grand prize!
    </div>
  )}
</div>

      </div>

      <div className={styles.memeGrid}>
        {memesToShow.map((meme) => (
          <div key={meme.id} className={styles.memeCard}>
            <img src={meme.src} alt={meme.name} className="w-full h-full object-cover rounded" />
            <div className={styles.overlay}>
              <p className="text-center font-semibold text-cyan-300">{meme.description}</p>
              <button
                className={styles.exploreButton}
                onClick={() => setSelectedMeme(meme)}
              >
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>

      {memes.length > 10 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className={styles.showMoreButton}
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}

      {selectedMeme && (
        <Modal
          meme={selectedMeme}
          onClose={() => setSelectedMeme(null)}
          onVote={handleVote}
          votedType={userVotes[selectedMeme.id]}
        />
      )}

      {vibeEffect === 'laugh' && <div className={styles.laughEffectOverlay} />}
      {vibeEffect === 'clap' && <div className={styles.clapEffectOverlay} />}
      {vibeEffect === 'downvote' && <div className={styles.downvoteEffectOverlay} />}
    </section>
  );
};

export default UserPostedMeme;
