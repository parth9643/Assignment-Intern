import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Components/Javascript/Header';
import React, { useEffect, useState } from 'react';
import Routers from './Routers';
import axios from 'axios';
import './index.css';

// Base URL from environment variable
const BASE_URL = process.env.REACT_APP_BASE_URL;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // API call to check login status
    axios
      .get(`${BASE_URL}`, { withCredentials: true })
      .then((res) => {
        console.log('Response:', res.data);
        const data = res.data;
        if (data.username) {
          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        console.error('Error:', err.message);
        setIsLoggedIn(false);
      });
  }, []); // Dependency array ensures this runs only once

  return (
    <div className="App">
      <Header />
      <Routers isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
