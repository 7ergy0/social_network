import React from "react";
import n from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PropType} from "../../App";








function Profile(props:PropType) {
    return (
        <div className={n.profile}>
            <ProfileInfo/>
            <MyPosts state={props.state}/>

        </div>


    )
}

export default Profile