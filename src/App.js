import React from 'react';
import './App.scss'
import MainContainer from './Components/MainContainer/MainContainer';
import NavBar   from './Components/NavBar/NavBar';

function App() {
    return (
        <div className="App">
            <NavBar />
            <MainContainer />
        </div>
    )
}

export default App
