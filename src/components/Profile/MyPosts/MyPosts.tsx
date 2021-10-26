import React from "react";
import n from './MyPosts.module.css'
import Post from "./Post/Post";
import state from "../../../redux/state";


function MyPosts() {


    let postsElement = state.profilePage.postsData.map(m =><Post message={m.message} likesCount={m.likesCount}/>)
    return (
        <div className={n.postsBlock}>

            <h3>My Post</h3>

            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={n.posts}>

                {postsElement}

            </div>
        </div>
    )
}

export default MyPosts