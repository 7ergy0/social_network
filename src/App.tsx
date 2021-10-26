import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";




function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            <div className="app-wrapper-content">
                <Route path={'/dialogs'} render={()=><Dialogs />}/>
                <Route path={'/profile'} render={()=><Profile />}/>

            </div>
        </div>

    );
}

export default App;
