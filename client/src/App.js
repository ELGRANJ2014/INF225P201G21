import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import TuComponente from './TuComponente.js';


function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <TuComponente/>
            </header>
        </div>
    );
};

export default App;
