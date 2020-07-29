import React from 'react';
import './App.css';
import FirstTask from './components/FirstTask/FirstTask';
import {BrowserRouter} from 'react-router-dom';
import SecondTask from './components/SecondTask/SecondTask';

function App(props: any) {
    return (
        <div className="App">
            <BrowserRouter>
                <FirstTask state={props.state.firstTaskReducer} />
                <SecondTask state={props.state.secondTaskReducer} dispatch={props.store.dispatch}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
