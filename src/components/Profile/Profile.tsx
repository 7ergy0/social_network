import React from "react";
import n from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, RootStoreType} from "../../redux/store";



type ProfileType={
    store:RootStoreType
    dispatch:(action:ActionsType)=>void
    newText:string
}





function Profile(props:ProfileType) {
    return (
        <div className={n.profile}>
            <ProfileInfo/>
            <MyPosts store={props.store}
                     newText={props.newText}
                     dispatch={props.dispatch}/>

        </div>


    )
}

export default Profile