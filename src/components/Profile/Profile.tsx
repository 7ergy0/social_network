import React from "react";
import n from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";
import {savePhotoProfile} from "../../redux/profile-reducer";


type ProfileType = {}


function Profile(props: any) {
    return (
        <div className={n.profile}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatusProfile={props.updateStatusProfile}
                         isOwner={props.isOwner}
                         savePhotoProfile={props.savePhotoProfile}
                         saveProfile={props.saveProfile}/>
            <MyPostsContainer/>

        </div>


    )
}

export default Profile