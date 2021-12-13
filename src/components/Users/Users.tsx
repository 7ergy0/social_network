import React from "react";
import s from "./Users.module.css";
import usersPhoto from "../../assets/images/users.png";


type UsersType={
    totalUsersCount:number
    pageSize:number
    currentPage:number
    onPageChanged:(pageNumber:number)=>void
    users:[]
    unfollowAction:(id:number)=>void
    followAction:(id:number)=>void
}

function Users(props:UsersType){

    let pageCount=Math.ceil(props.totalUsersCount/props.pageSize)
    let pages=[]
    for (let i=1;i<=pageCount;i++)
        pages.push(i)

    return<div>
        <div>
            {pages.map(m=><span className={props.currentPage===m?s.selectedPage:s.pages}
                                onClick={(e)=>{props.onPageChanged(m)}}>{m}</span>
            )}
        </div>
        {
            props.users.map((m: any) => <div key={m.id}>
                    <span>
                        <img src={m.photos.small != null ? m.photos.small : usersPhoto} className={s.photos}/>
                        <div>
                            {
                                m.followed
                                    ? <button onClick={() => {
                                        props.unfollowAction(m.id)
                                    }}>unfollow</button>
                                    : <button onClick={() => {
                                        props.followAction(m.id)
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
}
export default Users;