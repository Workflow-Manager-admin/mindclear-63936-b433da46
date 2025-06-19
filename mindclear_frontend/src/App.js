import React, { useRef, useState, useEffect } from 'react';
import './App.css';

/**
 * Full-screen gradient background, centered glassmorphic card,
 * app name top-left, "View Journey" button top-right.
 */
/*
 * PUBLIC_INTERFACE
 */
function App() {
  // State for the Zen quote
  const [zenQuote, setZenQuote] = useState('');
  const [fadeIn, setFadeIn] = useState(true);
  const cardRef = useRef(null);

  // Fade-in effect on initial mount
  useEffect(() => {
    setFadeIn(true); // Show fade-in when mounted
    const fadeTimeout = setTimeout(() => {
      setFadeIn(false); // Remove .fade-in after transition to avoid stacking CSS
    }, 700);
    return () => clearTimeout(fadeTimeout);
  }, []);

  // Fetch Zen quote on mount
  useEffect(() => {
    // PUBLIC_INTERFACE
    async function fetchZenQuote() {
      try {
        const response = await fetch('https://zenquotes.io/api/random');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        if (Array.isArray(data) && data.length && data[0].q && data[0].a) {
          setZenQuote(`"${data[0].q}"\n– ${data[0].a}`);
        } else {
          setZenQuote('A moment of mindfulness is never wasted.');
        }
      } catch (err) {
        setZenQuote('Unable to load a quote right now.');
      }
    }
    fetchZenQuote();
  }, []);

  return (
    <div className="mindclear-gradient-bg">
      <div
        className={
          `mindclear-center-card` +
          (fadeIn ? ' fade-in' : '')
        }
        ref={cardRef}
      >
        <div className="mindclear-card-header">
          <div className="mindclear-app-name">
            Thought Detox <span role="img" aria-label="meditate">🧘‍♀️</span>
          </div>
          <button
            className="mindclear-journey-btn"
            // Placeholder for future navigation
            onClick={() => { /* To be implemented: routing */ }}
            tabIndex={0}
            type="button"
          >
            View Journey
          </button>
        </div>
        {/* Main content area displays Zen Quote only */}
        <div className="mindclear-card-content">
          <div
            style={{
              width: "100%",
              minHeight: "110px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.17rem",
              fontWeight: 500,
              color: "#3f4461",
              textAlign: "center",
              whiteSpace: "pre-line"
            }}
          >
            {zenQuote || "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;