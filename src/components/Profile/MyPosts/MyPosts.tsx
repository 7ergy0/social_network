import React, {ChangeEvent} from "react";
import n from './MyPosts.module.css'
import Post from "./Post/Post";
import {StateType} from "../../../redux/store";




type MyPostType = {
    addPostAction:()=>void
    updateNewPostTextAction:(text:string)=>void
    newPostText:string
    state:StateType
}

function MyPosts(props: MyPostType) {

    let postsElement =
        props.state.profilePage.postsData.map((m) => <Post key={m.id} message={m.message} likesCount={m.likesCount}/>)

    let addPost = () => {
        props.addPostAction()
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text=e.target.value
        props.updateNewPostTextAction(text)
    }
    return (
        <div className={n.postsBlock}>

            <h3>My Post</h3>

            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={n.posts}>

                {postsElement}

            </div>
        </div>
    )
}

export default MyPosts