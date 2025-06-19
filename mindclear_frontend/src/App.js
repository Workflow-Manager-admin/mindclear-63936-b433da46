import React from 'react';
import './App.css';

/**
 * Full-screen gradient background, centered glassmorphic card,
 * app name top-left, "View Journey" button top-right.
 */
// PUBLIC_INTERFACE
function App() {
  return (
    <div className="mindclear-gradient-bg">
      <div className="mindclear-center-card">
        <div className="mindclear-card-header">
          <div className="mindclear-app-name">Thought Detox <span role="img" aria-label="meditate">🧘‍♀️</span></div>
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
          {/* Placeholder for future content */}
        </div>
      </div>
    </div>
  );
}

export default App;