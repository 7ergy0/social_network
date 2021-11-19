
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import {rerenderEntireTree} from "./rerenderEntireTree";






rerenderEntireTree(store.getState());

store.subscribe(()=> {
    let state = store.getState()
    rerenderEntireTree(state);
});



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
