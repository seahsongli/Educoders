import React, { useState, useEffect } from 'react';
import './Chat.css';
import { FaHome, FaBook, FaEnvelope, FaUser } from 'react-icons/fa';

const Chat = () => {
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem('messages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [input, setInput] = useState('');

  // Dummy profile image URL, you can replace this with real user data
  const userProfileImage = 'https://via.placeholder.com/40'; // Replace with actual image URL

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const newMessage = {
        text: input,
        profileImage: userProfileImage, // Add the profile image
      };
      const newMessages = [...messages, newMessage];
      setMessages(newMessages);
      setInput('');
      localStorage.setItem('messages', JSON.stringify(newMessages)); // Save to localStorage
    }
  };

  const PageHandler = (e) => {
    const page = e.currentTarget.getAttribute('data-page');
    if (page) {
      window.location.href = page;
    }
  };

  return (
    <div className="chat-container">
      <h1>Chat</h1>
      <div className="messages">
        {messages.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className="message">
              <img src="https://noun.pics/1250.svg" alt="Profile" className="profile-image" />
              <span>{msg.text}</span>
            </div>
          ))
        )}
      </div>
      <form className="message-input" onSubmit={handleSendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
          className="input-box"
        />
        <button type="submit" className="send-button">Send</button>
      </form>
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

export default Chat;
