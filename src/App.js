import React, { useState } from 'react';
import { AppContext } from "./context/AppContext";
import Routes from "./Routes";
import Header from './Header';
import './App.css';

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  return (
    <>
      <Header />
      <div className="App">
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Routes />
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
