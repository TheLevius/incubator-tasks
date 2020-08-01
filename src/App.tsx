import React from 'react';
import './App.css';
import FirstTask from './components/FirstTask/FirstTask';
import {BrowserRouter} from 'react-router-dom';
import SecondTask from './components/SecondTask/SecondTask';
import ThirdTask from './components/ThirdTask/ThirdTask';

function App(props: any) {
    return (
        <div className="App">
            <BrowserRouter>
                <FirstTask />
                <SecondTask />
                <ThirdTask />
            </BrowserRouter>
        </div>
    );
}

export default App;
