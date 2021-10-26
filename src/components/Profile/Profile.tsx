import React from "react";
import n from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


function Profile() {
    return (
        <div className={n.profile}>
            <ProfileInfo/>
            <MyPosts/>

        </div>


    )
}

export default Profile