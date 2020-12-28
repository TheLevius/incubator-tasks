import React from 'react';
import './App.css';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import PreJunior from './components/PreJuniour/PreJunior';
import Junior from './components/Junior/Junior';

function App(props: any) {
    return (
        <div className="App">
            <HashRouter>
                <Header />
                <Route path='/prejunior' render={PreJunior}/>
                <Route path='/junior' render={Junior}/>
            </HashRouter>
        </div>
    );
}

export default App;
