import React from "react";
import n from './Post.module.css'



function Post(props:any){
    return(
        <div className={n.posts}>
            <div className={n.item}>
                    <img src={"https://s00.yaplakal.com/pics/pics_original/7/6/7/14289767.jpg"}/>
                {props.message}
            </div>
            <div>
                <span>like</span>
                <span>{props.likesCount}</span>
            </div>
        </div>


    )
}
export default Post