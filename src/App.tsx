import React from 'react';
import './App.css';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import PreJunior from './components/PreJuniour/PreJunior';
import Header from './components/Header/Header';

function App(props: any) {
    return (
        <div className="App">
            <HashRouter>
                <Header />
                <Route path='/prejunior' render={PreJunior}/>
            </HashRouter>
        </div>
    );
}

export default App;
