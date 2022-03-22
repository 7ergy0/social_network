import React, {useState} from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../Preloader/Preloader";
import ProfilePhoto from "./ProfilePhoto";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForms from "./ProfileDataForm";



type ProfileInfoType={

}

function ProfileInfo({saveProfile,...props}:any) {
    const [editMode,setEditMode]=useState<boolean>(false)
    if(!props.profile){
        return <Preloader/>
    }
    const onSubmit=(formData:any)=>{
        saveProfile(formData)
        //setEditMode(false)
    }
        return(


           props.isOwner && <div className={s.profileInfo}>

                <div className={s.descriptionBlock}>
                    <ProfilePhoto image={props.profile.photos.large} isOwner={props.isOwner}
                                  savePhotoProfile={props.savePhotoProfile}
                    />
                 <div>
                     {editMode
                         ?<ProfileDataForms profile={props.profile} initialValues={props.profile}
                                           onSubmit={onSubmit}/>
                         :<ProfileData profile={props.profile} isOwner={props.isOwner}
                                       goToEditMode={()=>{setEditMode(true)}}/>}
                 </div>
                    <ProfileStatusWithHooks status={props.status} updateStatusProfile={props.updateStatusProfile}/>
                </div>
            </div>
        )
    }

export default ProfileInfo;

export type ContactsTypeProps={
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter:string
    website:string
    youtube: string
    mainLink: string
}
type ContactsType={
    contactTitle:string
    contactValue:string
}

 export const Contacts=(props:ContactsType)=>{
    return(
        <div className={s.contacts}>
           <b>{props.contactTitle}:</b> {props.contactValue}
        </div>
    )
}

const ProfileData=(props:any)=>{
    return(
        <div>
            {props.isOwner && <div><button onClick={props.goToEditMode}>edit</button></div>}
            <div>
                <b>Full Name:</b>{props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job:</b>{props.profile.lookingForAJob?"yes":"no"}
            </div>
            {props.profile.lookingForAJob &&
            <div>
                <b>My professional skills:</b>{props.profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>About me:</b>{props.profile.aboutMe}
            </div>
            <div>
                <b>Contacts:</b>{Object.keys(props.profile.contacts).map((m,index)=>{
                return <Contacts key={index} contactTitle={m} contactValue={props.profile.contacts[m]} />
            })}

            </div>
        </div>
    )
}
