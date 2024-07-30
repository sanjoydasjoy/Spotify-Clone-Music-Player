// src/components/Welcome.js
import './Welcome.css';

function Welcome({ onGetStarted }) {
  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <h1 className="welcome-title">Welcome to the Spotify Clone Music Player</h1>
        <p className="welcome-message">
          Discover and enjoy your favorite tracks. Start searching now!
        </p>
        <button className="btn btn-primary" onClick={onGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Welcome;
