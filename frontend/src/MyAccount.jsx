import React from 'react';
import './MyAccount.css'; // Import your custom CSS
import './Cube.css';
import { FaEdit, FaLock, FaHistory, FaComments, FaStar, FaShareAlt, FaInfoCircle, FaHome, FaBook, FaEnvelope, FaUser } from 'react-icons/fa'; // Importing icons from react-icons

const MyAccount = () => {
  // PageHandler to redirect based on clicked item
  const PageHandler = (e) => {
    const page = e.currentTarget.getAttribute('data-page'); // Get the page from data attribute
    if (page) {
      window.location.href = page; // Redirect to the page
    }
  };

  return (
    <div className="container">
      {/* Profile Section */}
      <div className="profile-section">
        <p>Profile</p>
        {/* 3D Rotating Cube Section */} 
        <div className="cube-container"> 
          <div className="cube"> 
            <div className="cube-face front"> 
              <img src="https://noun.pics/1250.svg" alt="Front" /> 
            </div> 
            <div className="cube-face back"> 
              <img src="https://noun.pics/1250.svg" alt="Back" /> 
            </div> 
            <div className="cube-face left"> 
              <img src="https://noun.pics/1250.svg" alt="Left" /> 
            </div> 
            <div className="cube-face right"> 
              <img src="https://noun.pics/1250.svg" alt="Right" /> 
            </div> 
            <div className="cube-face top"> 
              <img src="https://noun.pics/1250.svg" alt="Top" /> 
            </div> 
            <div className="cube-face bottom"> 
              <img src="https://noun.pics/1250.svg" alt="Bottom" /> 
            </div> 
          </div> 
        </div>
      </div>

      {/* Account Options */}
      <div className="account-options">
        <div className="option">
          <FaEdit className="icon" />
          <span>Edit Profile</span>
        </div>
        <div className="option">
          <FaLock className="icon" />
          <span>Purchased Courses</span>
        </div>
        <div className="option">
          <FaHistory className="icon" />
          <span>Payment History</span>
        </div>
        <div className="option">
          <FaComments className="icon" />
          <span>Chat / Support</span>
        </div>
        <div className="option">
          <FaStar className="icon" />
          <span>Rate App</span>
        </div>
        <div className="option">
          <FaShareAlt className="icon" />
          <span>Share App</span>
        </div>
        <div className="option">
          <FaInfoCircle className="icon" />
          <span>About Us</span>
        </div>
      </div>

      <div className="bottom-nav">
        <div className="nav-item" data-page="/home" onClick={PageHandler}>
          <FaHome className="icon" />
          <span>Home</span>
        </div>
        <div className="nav-item" data-page="/courses" onClick={PageHandler}>
          <FaBook className="icon" />
          <span>Courses</span>
        </div>
        <div className="nav-item" data-page="/messages" onClick={PageHandler}>
          <FaEnvelope className="icon" />
          <span>Messages</span>
        </div>
        <div className="nav-item active" data-page="/myAccount" onClick={PageHandler}>
          <FaUser className="icon" />
          <span>Profile</span>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
