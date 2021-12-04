import React from "react";
import {UsersContainerType} from "./UsersContainer";
import s from './Users.module.css'
import * as axios from "axios";
import usersPhoto from '../../assets/images/users.png'


// interface Items{
//     name:string
//     id:number
//     uniqueUrlName:null
//     photos:Photos
//     status:null
//     followed:false
// }
// interface Photos{
//     small:null
//     large:null
// }


class Users extends React.Component<any, any> {

    componentDidMount() {
        axios.default.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUserAction(response.data.items)
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map((m: any) => <div key={m.id}>
                    <span>
                        <img src={m.photos.small != null ? m.photos.small : usersPhoto} className={s.photos}/>
                        <div>
                            {
                                m.followed
                                    ? <button onClick={() => {
                                        this.props.unfollowAction(m.id)
                                    }}>unfollow</button>
                                    : <button onClick={() => {
                                        this.props.followAction(m.id)
                                    }}>follow</button>
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


}

export default Users;