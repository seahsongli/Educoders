import './App.css';
import WorldcoinVerification from './verify';
import { useState } from 'react';
import HomePage from './home';
import HelpPage from './HelpPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [verification, setVerification] = useState(false);

  const handleVerifySuccess = () => {
    setVerification(true);
  };

  return (
    <Router>
      <div className="App">
        {!verification && <WorldcoinVerification onVerifySuccess={handleVerifySuccess} />}
        {verification && (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/help" element={<HelpPage />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
