import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import AgendarHora from './AgendarHora.js';


function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <AgendarHora/>
            </header>
        </div>
    );
};

export default App;
