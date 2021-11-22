import React from "react";
import n from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";




type ProfileType={

}





function Profile(props:ProfileType) {
    return (
        <div className={n.profile}>
            <ProfileInfo/>
            <MyPostsContainer/>

        </div>


    )
}

export default Profile