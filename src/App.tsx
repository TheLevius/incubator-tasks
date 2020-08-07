import React from 'react';
import './App.css';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import PreJunior from './components/PreJuniour/PreJunior';

function App(props: any) {
    return (
        <div className="App">
            <BrowserRouter>
                <div className='homepage'>
                    <NavLink to={'/prejunior'}>PreJunior Page</NavLink>
                </div>
                <Route path='/prejunior' render={PreJunior}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
