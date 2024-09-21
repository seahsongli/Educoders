import React from 'react';
import './App.css';
const HomePage = () => {
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
            src="C:\Users\seahs\repos\MedDataChain\frontend\public\sigma.jpg" 
            alt="Currently Active" 
          />
          <p>LookMaxxing</p>
          <small>Skibidi Toilet</small>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <button>Home</button>
        <button>Courses</button>
        <button>Messages</button>
        <button>Profile</button>
      </div>
    </div>
  );
};

export default HomePage;
