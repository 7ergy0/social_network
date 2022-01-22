import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfilePhoto from "./ProfilePhoto";


type ProfileInfoType={

}

function ProfileInfo(props:any) {
    if(!props.profile){
        return <Preloader/>
    }
        return(


            <div className={s.profileInfo}>
                {/*<div>*/}
                {/*    <img src="https://mocah.org/uploads/posts/4544607-men-digital-art-nature-spaceship-futuristic-star-citizen-video-games-science-fiction-hull-c-desert-sand-clouds.jpg"/>*/}
                {/*</div>*/}
                <div className={s.descriptionBlock}>
                    <ProfilePhoto image={props.profile.photos.large}/>
                   {/*<img src={props.profile.photos.large} style={{width:'50px',height:'50px'}}/>*/}
                    <ProfileStatus status={props.status} updateStatusProfile={props.updateStatusProfile}/>
                </div>
            </div>
        )
    }

export default ProfileInfo;