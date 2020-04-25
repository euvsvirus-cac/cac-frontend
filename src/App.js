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
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  return (
    <>
      <Header />
      <div className="App">
        <div style={wrapperStyle}>
          <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
            <Routes />
          </AppContext.Provider>
        </div>
      </div>
    </>
  );
}

export default App;
