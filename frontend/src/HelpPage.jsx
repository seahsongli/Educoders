import React from 'react';
import './HelpPage.css';

const HelpPage = () => {
  return (
    <div className="help-page">
      <div className="cube-container">
        <div className="cube">
          <div className="cube-face front">Buy</div>
          <div className="cube-face back">World</div>
          <div className="cube-face left">Coin</div>
          <div className="cube-face right">Now</div>
          <div className="cube-face top">Join</div>
          <div className="cube-face bottom">Us</div>
        </div>
        <p>Buy Worldcoin!</p>
      </div>
    </div>
  );
};

export default HelpPage;
