import React from "react";
import s from "./User.module.css";
import usersPhoto from "../../../assets/images/users.png";
import {NavLink} from "react-router-dom";
import {UsersType} from "../../../types";




type UserPropsType = {
    user: UsersType
    unfollow: (id: number) => void
    follow: (id: number) => void
    followingInProgress: number[]
}

function User({user, ...props}: UserPropsType) {

    return <div>
          <div key={user.id}>
                    <span>
                        <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : usersPhoto} className={s.photos}/>
                        </NavLink>
                            </div>
                        <div>
                            {
                                user.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                              onClick={() => {
                                                  // props.toggleIsFollowing(true,m.id)
                                                  //   followApi.unfollowUser(m.id)
                                                  //       .then(data => {
                                                  //           if (data.resultCode === 0) {
                                                  //               props.unfollow(m.id)
                                                  //           }
                                                  //           props.toggleIsFollowing(false,m.id)
                                                  //       });
                                                  props.unfollow(user.id);
                                              }}>unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                              onClick={() => {
                                                  // props.toggleIsFollowing(true,m.id)
                                                  //  followApi.followUser(m.id)
                                                  //      .then(data => {
                                                  //          if (data.resultCode === 0) {
                                                  //              props.follow(m.id)
                                                  //          }
                                                  //          props.toggleIsFollowing(false,m.id)
                                                  //      });
                                                  props.follow(user.id);

                                              }}>follow</button>
                            }

                            </div>
                    </span>
                    <span>
                        <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                            </span>
<span>
    <div>{"m.location.city"}</div>
    <div>{"m.location.country"}</div>
</span>


                    </span>


                </div>)



    </div>
}

export default User;