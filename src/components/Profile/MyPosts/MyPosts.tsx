import React, {ChangeEvent} from "react";
import n from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsType, RootStoreType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";



type MyPostType = {
    store:RootStoreType
    dispatch: (action: ActionsType) => void
    newText:string

}

function MyPosts(props: MyPostType) {

    let postsElement =
        props.store._state.profilePage.postsData.map((m) => <Post key={m.id} message={m.message} likesCount={m.likesCount}/>)

    let addPost = () => {
        props.dispatch(addPostActionCreator(props.newText))
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextActionCreator(e.target.value))
    }
    return (
        <div className={n.postsBlock}>

            <h3>My Post</h3>

            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.store._state.profilePage.newPostText}/>
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