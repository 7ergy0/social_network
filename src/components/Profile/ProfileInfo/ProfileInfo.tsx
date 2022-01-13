import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

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
                    <img src={props.profile.photos.large} style={{width:'50px',height:'50px'}}/>
                    <ProfileStatus status={"ksnaflkn"}/>
                </div>
            </div>
        )
    }

export default ProfileInfo;