import React, { useState } from 'react';
import { AppContext } from "./context/AppContext";
import Routes from "./Routes";
import './App.css';

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <p>Consult a Colleague.</p>
      </header>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes />
      </AppContext.Provider>
    </div>
  );
}

export default App;
