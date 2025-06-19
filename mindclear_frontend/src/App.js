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
  // State for textarea content and animating state
  const [thought, setThought] = useState('');
  const [animate, setAnimate] = useState(false);
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

  // PUBLIC_INTERFACE
  function handleShredIt() {
    setThought('');
    setAnimate(true);
    // After animation duration, remove animation classes
    setTimeout(() => {
      setAnimate(false);
    }, 850); // Sync with CSS animation duration
  }

  return (
    <div className="mindclear-gradient-bg">
      <div
        className={
          `mindclear-center-card` +
          (fadeIn ? ' fade-in' : '') +
          (animate ? ' shred-fade-bounce' : '')
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
        {/* Main content area can go here */}
        <div className="mindclear-card-content">
          <div className="mindclear-thought-box-section">
            <textarea
              className="mindclear-thought-textarea"
              placeholder="Type what’s bothering you..."
              rows={5}
              value={thought}
              onChange={e => setThought(e.target.value)}
            />
            <div className="mindclear-privacy-note">
              Everything is private and safe here.
            </div>
            <button
              className="btn btn-large shred-btn"
              style={{ marginTop: 19 }}
              type="button"
              onClick={handleShredIt}
            >
              🔒 Shred It
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;