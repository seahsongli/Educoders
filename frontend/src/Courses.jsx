import React from 'react';
import './Courses.css';
import { FaEdit, FaLock, FaHistory, FaComments, FaStar, FaShareAlt, FaInfoCircle, FaHome, FaBook, FaEnvelope, FaUser } from 'react-icons/fa'; 
const coursesData = [
  {
    id: 1,
    title: 'Introduction to React',
    description: 'Learn the basics of React, including components, state, and props.',
  },
  {
    id: 2,
    title: 'JavaScript Fundamentals',
    description: 'Master the fundamentals of JavaScript, including ES6 features.',
  },
  {
    id: 4,
    title: 'Introduction to Blockchain',
    description: 'Discover the basics of blockchain technology and cryptocurrencies.',
  },
  {
    id: 5,
    title: 'Introduction to Nouns',
    description: 'Explore Nouns, unique digital entities representing assets and concepts for secure, transparent interactions.',
  },
  {
    id: 6,
    title: 'Oracles in the Cloud',
    description: 'Learn how to deploy and manage Oracle databases in the cloud.',
  },
];

const Courses = () => {
    const PageHandler = (e) => {
        const page = e.currentTarget.getAttribute('data-page'); // Get the page from data attribute
        if (page) {
          window.location.href = page; // Redirect to the page
        }
      };
    
    const sendToCoursera = (input) => () => {
        window.location.href = "https://www.coursera.org/" + input;
    }

  return (
    <div className="courses-container">
      <h1>Available Courses</h1>
      <div className="courses-list">
        {coursesData.map((course) => (
          <div key={course.id} className="course-card">
            <h2>{course.title}</h2>
            <p id = "dickscription">{course.description}</p>
            <button className="enroll-button" onClick={sendToCoursera("learn/building-dapps-in-ethereum-blockchain?msockid=1670e21e9dd165f229bbf61a9cd06482")}>Enroll Now</button>
          </div>
        ))}
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
        <div className="nav-item active" data-page="/" onClick={PageHandler}>
          <FaUser className="icon" />
          <span>Profile</span>
        </div>
      </div>
      </div>
   
    </div>
  );
};

export default Courses;
