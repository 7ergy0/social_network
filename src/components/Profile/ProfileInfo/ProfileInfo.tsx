import React from "react";
import s from './ProfileInfo.module.css'



function ProfileInfo() {
    return(
        <div className={s.profileInfo}>
            <div>
                <img src="https://mocah.org/uploads/posts/4544607-men-digital-art-nature-spaceship-futuristic-star-citizen-video-games-science-fiction-hull-c-desert-sand-clouds.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}
export default ProfileInfo;