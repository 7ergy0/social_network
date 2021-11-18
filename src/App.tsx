import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {ActionsType, RootStoreType} from "./redux/state";




type AppType={
    store:RootStoreType
    dispatch:(action:ActionsType)=>void
}




function App(props:AppType) {
const state=props.store.getState()
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            <div className="app-wrapper-content">
                <Route path='/dialogs' render={()=><Dialogs store={props.store}
                                                            postBody={state.dialogsPage.newMessageBody}
                                                            dispatch={props.dispatch.bind(props.store)}/>}/>
                <Route path='/profile' render={()=><Profile store={props.store}
                                                            newText={state.profilePage.newPostText}
                                                            dispatch={props.store.dispatch.bind(props.store)}/>}/>

            </div>
        </div>

    );
}

export default App;
