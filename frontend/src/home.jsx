import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // State for vaporizing each face
  const [vaporizeFront, setVaporizeFront] = useState(false);
  const [vaporizeBack, setVaporizeBack] = useState(false);
  const [vaporizeLeft, setVaporizeLeft] = useState(false);
  const [vaporizeRight, setVaporizeRight] = useState(false);
  const [vaporizeTop, setVaporizeTop] = useState(false);
  const [vaporizeBottom, setVaporizeBottom] = useState(false);

  return (
    <div className="home-page">
      {/* Header */}
      <div className="header">
        <h1>EduGoondus</h1>
      </div>

      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-info">
          <img 
            className="profile-avatar" 
            src="https://noun.pics/1250.svg" 
            alt="User Avatar" 
          />
          <div className="profile-details">
            <h2>Wenjiggler.eth</h2>
            <p>Streak: 50 days!</p>
          </div>
        </div>
      </div>

      {/* Level Section */}
      <div className="level-section">
        <h2>Level 42</h2>
        <div className="level-progress-bar">
          <div className="progress" style={{ width: '50%' }}></div>
        </div>
        <p>50% to next level</p>
      </div>

      {/* Currently Active Section */}
      <div className="currently-active-section">
        <h2>Currently Active:</h2>
        <div className="active-course">
          <img 
            src="https://your-image-url.com/sigma-male.png" 
            alt="Currently Active" 
          />
          <p>LookMaxxing</p>
          <small>Skibidi Toilet</small>
        </div>
      </div>

      {/* 3D Rotating Cube Section */}
      <div className="cube-container">
        <div className="cube">
          <div 
            className={`cube-face front ${vaporizeFront ? 'vaporize' : ''}`}
            onClick={() => setVaporizeFront(true)}
          >
            <img src="https://noun.pics/1250.svg" alt="Front" />
          </div>
          <div 
            className={`cube-face back ${vaporizeBack ? 'vaporize' : ''}`}
            onClick={() => setVaporizeBack(true)}
          >
            <img src="https://noun.pics/1250.svg" alt="Back" />
          </div>
          <div 
            className={`cube-face left ${vaporizeLeft ? 'vaporize' : ''}`}
            onClick={() => setVaporizeLeft(true)}
          >
            <img src="https://noun.pics/1250.svg" alt="Left" />
          </div>
          <div 
            className={`cube-face right ${vaporizeRight ? 'vaporize' : ''}`}
            onClick={() => setVaporizeRight(true)}
          >
            <img src="https://noun.pics/1250.svg" alt="Right" />
          </div>
          <div 
            className={`cube-face top ${vaporizeTop ? 'vaporize' : ''}`}
            onClick={() => setVaporizeTop(true)}
          >
            <img src="https://noun.pics/1250.svg" alt="Top" />
          </div>
          <div 
            className={`cube-face bottom ${vaporizeBottom ? 'vaporize' : ''}`}
            onClick={() => setVaporizeBottom(true)}
          >
            <img src="https://noun.pics/1250.svg" alt="Bottom" />
          </div>
        </div>
        {/* 3D Ethereum Logo Inside the Cube */}
        <div className="ethereum-logo">
          <div className="eth-top"></div>
          <div className="eth-bottom"></div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <button>Home</button>
        <button>Courses</button>
        <button>Messages</button>
        <button>Profile</button>
        <Link to="/help">
          <button>Help</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
