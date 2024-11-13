// Loading.js
import React, { useEffect, useRef, useState } from 'react';
import '../styles/Loading.css'; // Add custom CSS for full-screen loading style

const Loading = ({ onFinish }) => {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cv_box = canvasRef.current;
    const ctx_box = cv_box.getContext('2d');

    cv_box.width = window.innerWidth;
    cv_box.height = window.innerHeight;

    const alphabets = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    const fontSize = 16;
    const cellSize = fontSize * 1.5;
    const columns = cv_box.width / cellSize;
    const rainDrops = new Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx_box.fillStyle = 'rgba(10, 10, 10, 0.1)';
      ctx_box.fillRect(0, 0, cv_box.width, cv_box.height);

      ctx_box.fillStyle = '#0F0';
      ctx_box.font = fontSize + 'px monospace';
      ctx_box.textAlign = 'center';

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabets.charAt(Math.floor(Math.random() * alphabets.length));
        ctx_box.fillText(text, i * cellSize, rainDrops[i] * cellSize);

        if (rainDrops[i] * cellSize > cv_box.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    const intervalId = setInterval(draw, 50);

    // Simulate loading completion
    const loadingTimeout = setTimeout(() => {
      setLoading(false); // Stop showing the loading screen
      if (onFinish) onFinish(); // Call onFinish to notify parent
    }, 3000); // Adjust the timeout duration as needed

    return () => {
      clearInterval(intervalId);
      clearTimeout(loadingTimeout);
    };
  }, [onFinish]);

  if (!loading) return null;

  return (
    <div className="loading-container">
      <canvas ref={canvasRef} id="matrix-box"></canvas>
      <div className="loading-text">Loading...</div>
    </div>
  );
};

export default Loading;
