import React from 'react';
import './App.css';
import FirstTask from './components/FirstTask/FirstTask';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <FirstTask/>
      </BrowserRouter>
    </div>
  );
}

export default App;
