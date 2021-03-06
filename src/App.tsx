import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainProvider } from './contexts';

const App: React.FC = () => {
  return (
    <div className="App">
      <MainProvider>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </MainProvider>
    </div>
  );
};

export default App;
