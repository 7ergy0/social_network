import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {StateType} from "./redux/state";




type AppType={
    state:StateType
    dispatch:(action:any)=>void
}




function App(props:AppType) {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            <div className="app-wrapper-content">
                <Route path='/dialogs' render={()=><Dialogs state={props.state}/>}/>
                <Route path='/profile' render={()=><Profile state={props.state} dispatch={props.dispatch}/>}/>

            </div>
        </div>

    );
}

export default App;
