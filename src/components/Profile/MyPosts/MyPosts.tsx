import React, {ChangeEvent} from "react";
import n from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, StateType, updateNewPostTextActionCreation} from "../../../redux/state";


type MyPostType = {
    state: StateType
    dispatch: (action: any) => void
    newText:string

}

function MyPosts(props: MyPostType) {

    let postsElement =
        props.state.profilePage.postsData.map((m) => <Post key={m.id} message={m.message} likesCount={m.likesCount}/>)

    let addPost = () => {
        props.dispatch(addPostActionCreator(props.newText))
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextActionCreation(e.currentTarget.value))
    }
    return (
        <div className={n.postsBlock}>

            <h3>My Post</h3>

            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.state.profilePage.newPostText}/>
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