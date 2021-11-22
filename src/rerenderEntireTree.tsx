
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import store from "./redux/redux-store";
import {StateType} from "./redux/store";
import {Provider} from "react-redux";




export let rerenderEntireTree = (state:StateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
}