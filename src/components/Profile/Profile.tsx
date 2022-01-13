import React from "react";
import n from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";





type ProfileType={

}





function Profile(props:any) {
    return (
        <div className={n.profile}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatusProfile={props.updateStatusProfile}/>
            <MyPostsContainer/>

        </div>


    )
}

export default Profile