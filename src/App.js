import React, { useState } from 'react';
import { AppContext } from "./context/AppContext";
import Routes from "./Routes";
import Header from './Header';
import './App.css';

const wrapperStyle = {
  padding: 0,
  margin: 0,
  minHeight: '94vh', /* TODO: full height fix */
  background: 'linear-gradient(to left, #3498db, #4f6f8f)'
}

function App() {

  const jwtToken = sessionStorage.getItem('jwtToken');
  const [isAuthenticated, userHasAuthenticated] = useState(!!jwtToken);
  const [token, setToken] = useState(jwtToken || null);
  const updateToken = (token) => {
    sessionStorage.setItem('jwtToken', token);
    setToken(token);
  }

  const logout = () => {
    userHasAuthenticated(false);
    sessionStorage.clear();
  }

  return (
    <>
      <AppContext.Provider value={{
        isAuthenticated,
        userHasAuthenticated,
        token,
        updateToken,
        logout,
      }}>
        <Header />
        <div className="App">
          <div style={wrapperStyle}>
            <Routes />
          </div>
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
