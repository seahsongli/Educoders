import './App.css';
import WorldcoinVerification from './verify';
import { useState } from 'react';
import HomePage from './home';

function App() {
  const [verification, setVerification] = useState(false);
  const handleVerifySuccess = () => {
    setVerification(true);
  };
  return (
    <div className="App">
      {!verification && <WorldcoinVerification onVerifySuccess={handleVerifySuccess}/>}
      {verification && <HomePage />}
    </div>
  );
}

export default App;
