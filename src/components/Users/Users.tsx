import React from "react";
import {UsersContainerType} from "./UsersContainer";
import s from './Users.module.css'
import * as axios from "axios";
import usersPhoto from '../../assets/images/users.png'






function Users(props: any) {
    if (props.users.length === 0) {

        axios.default("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
            props.setUserAction(response.data.items)
        })


    }
    return (
        <div>
            {
                props.users.map((m:any )=> <div key={m.id}>
                    <span>
                        <img src={m.photos.small!=null?m.photos.small:usersPhoto} className={s.photos}/>
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
                        <div>{m.name}</div>
                        <div>{m.status}</div>
                            </span>
<span>
    <div>{"m.location.city"}</div>
    <div>{"m.location.country"}</div>
</span>


                    </span>


                </div>)
            }
        </div>


    )
}

export default Users;