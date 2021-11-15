import React from "react";
import n from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { StateType} from "../../redux/state";



type ProfileType={
    state:StateType
    dispatch:(action:any)=>void
    newText:string
}





function Profile(props:ProfileType) {
    return (
        <div className={n.profile}>
            <ProfileInfo/>
            <MyPosts state={props.state}
                     newText={props.newText}
                     dispatch={props.dispatch}/>

        </div>


    )
}

export default Profile