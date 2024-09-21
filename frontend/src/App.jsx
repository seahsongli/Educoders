import './App.css';
import WorldcoinVerification from './verify';
import { useState } from 'react';
import HomePage from './home';
import MyAccount from './MyAccount';
import HelpPage from './HelpPage';
import Courses from './Courses';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [verification, setVerification] = useState(false);

  const handleVerifySuccess = () => {
    setVerification(true);
  };

  return (
    <Router>
      <div className="App">
        {verification && <WorldcoinVerification onVerifySuccess={handleVerifySuccess} />}
        {!verification && (
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/myAccount" element={<MyAccount />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/courses" element={<Courses />} />
            {/* Add more routes as needed */}
           
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
