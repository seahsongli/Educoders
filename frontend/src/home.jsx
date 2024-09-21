import React, { useState, useEffect } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaBook, FaEnvelope, FaUser } from 'react-icons/fa';

const HomePage = () => {
    const [progressWidth, setProgressWidth] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setProgressWidth((prev) => {
                if (prev < 100) {
                    return prev + 10; // Increase progress by 10%
                } else {
                    clearInterval(interval); // Stop when 100% is reached
                    setShowPopup(true); // Show popup when progress reaches 100%
                    return prev;
                }
            });
        }, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const PageHandler = (e) => {
        const page = e.currentTarget.getAttribute('data-page'); // Get the page from data attribute
        if (page) {
            navigate(page); // Redirect to the page
        }
    };

    const closePopup = () => {
        setShowPopup(false); // Close the popup
    };

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
                        <h2 className="Jigger">Wenjiggler.eth</h2>
                        <p><span className="streak-text">Streak: 50 days!</span></p>
                    </div> 
                </div>
            </div>

            {/* Level Section */}
            <div className="level-section">
                <h2>Level 42</h2>
                <div className="level-progress-bar">
                    <div className="progress" style={{ width: `${progressWidth}%` }}></div>
                </div>
                <p>{progressWidth}% to next level</p>
            </div>

            {/* Currently Active Section */}
            <div className="currently-active-section">
                <h2>Currently Active:</h2>
                <div className="jiggar">
                <div className="active-course">
                    <img 
                        src="https://i.ytimg.com/vi/SoW6BLDdbqY/hqdefault.jpg" 
                        alt="Currently Active" 
                    />
                    <p>LookMaxxing</p>
                    <small>Skibidi Toilet</small>
                </div>
                </div>
                
            </div>

            {/* 3D Rotating Cube Section */}
            <div className="cube-container">
                {/* Cube code here... */}
            </div>

            {/* Bottom Navigation */}
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

            {/* Popup Component */}
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Congratulations!</h2>
                        <p>You have earned 100 ETH!</p>
                        <button onClick={closePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomePage;
