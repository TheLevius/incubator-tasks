import React from 'react';
import './App.css';
import FirstTask from './components/FirstTask/FirstTask';
import {BrowserRouter} from 'react-router-dom';
import {RootStateType} from './redux/store';

function App(props: any) {
    return (
        <div className="App">
            <BrowserRouter>

                <FirstTask state={props.state.firstTaskReducer}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
