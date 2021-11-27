import React from "react";
import {UsersContainerType} from "./UsersContainer";
import s from './Users.module.css'
import {UsersType} from "../../redux/users-reducer";



function Users(props: UsersContainerType) {
    if (props.users.length === 0) {
        props.setUserAction([
            {
                id: 1,
                photo: "https://get.wallhere.com/photo/face-portrait-photography-actor-smoking-hair-head-cigars-Jack-Nicholson-eye-man-beard-male-hairstyle-2560x1600-px-close-up-facial-hair-598941.jpg",
                followed: false,
                fullName: "Sergey",
                status: "Im are boss",
                location: {city: "Borisov", country: "Belarus"}
            },
            {
                id: 2,
                photo: "https://get.wallhere.com/photo/face-portrait-photography-actor-smoking-hair-head-cigars-Jack-Nicholson-eye-man-beard-male-hairstyle-2560x1600-px-close-up-facial-hair-598941.jpg",
                followed: true,
                fullName: "Olga",
                status: "Im are boss too",
                location: {city: "Borisov", country: "Belarus"}
            },
            {
                id: 3,
                photo: "https://get.wallhere.com/photo/face-portrait-photography-actor-smoking-hair-head-cigars-Jack-Nicholson-eye-man-beard-male-hairstyle-2560x1600-px-close-up-facial-hair-598941.jpg",
                followed: false,
                fullName: "Alex",
                status: "Im are boss too",
                location: {city: "Borisov", country: "Belarus"}
            },] as UsersType[])
    }
    return (
        <div>
            {
                props.users.map(m => <div key={m.id}>
                    <span>
                        <img src={m.photo} className={s.photos}/>
                        <div>
                            {
                                m.followed
                                    ?<button onClick={()=>{props.unfollowAction(m.id)}}>unfollow</button>
                                    :<button onClick={()=>{props.followAction(m.id)}} >follow</button>
                            }

                            </div>
                    </span>
                    <span>
                        <span>
                        <div>{m.fullName}</div>
                        <div>{m.status}</div>
                            </span>
<span>
    <div>{m.location.city}</div>
    <div>{m.location.country}</div>
</span>


                    </span>


                </div>)
            }
        </div>


    )
}

export default Users;