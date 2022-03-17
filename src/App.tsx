import React, {ComponentType, ReactNode} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/Login";
import {connect} from "react-redux";
import {compose} from "@reduxjs/toolkit";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";
import {RootStateType} from "./redux/redux-store";
import {WithSuspense} from "./hoc/WithSuspense";


const DialogsContainer=React.lazy(() =>
    import("./components/Dialogs/DialogsContainer"))
const ProfileContainer=React.lazy(() =>
    import("./components/Profile/ProfileContainer"))


type AppType=mapStateToProps



type mapStateToProps={
    initialized:boolean
}

class App extends React.Component<any,AppType> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render():ReactNode {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>

                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={WithSuspense(DialogsContainer)}/>
                    <Route path='/profile/:userId?' render={WithSuspense(ProfileContainer)}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>

                </div>
            </div>

        );
    }
}
let mapStateToProps=(state:RootStateType)=>({
    initialized:state.app.initialized
})

export default compose<ComponentType>(withRouter,connect(mapStateToProps,{initializeApp}))(App);
