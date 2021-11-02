import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {RootStateType} from "./redux/state";





export type PropType={
    state:RootStateType

}

function App(props:PropType) {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            <div className="app-wrapper-content">
                <Route path='/dialogs' render={()=><Dialogs state={props.state}/>}/>
                <Route path='/profile' render={()=><Profile state={props.state} />}/>

            </div>
        </div>

    );
}

export default App;
