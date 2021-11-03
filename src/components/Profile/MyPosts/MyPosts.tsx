import React from "react";
import n from './MyPosts.module.css'
import Post from "./Post/Post";
import {PropType} from "../../../App";
import store from "../../../redux/state";




function MyPosts(props: PropType) {

    let postsElement =
        props.state.profilePage.postsData.map(m => <Post message={m.message} likesCount={m.likesCount}/>)

    let newPostElement: any = React.createRef()
    let addPost = () => {
        store.addPosts.bind(store)
    }
    let onPostChange = () => {
        let text: any = newPostElement.current.value
        store.updateNewPostText.bind(text)
    }
    return (
        <div className={n.postsBlock}>

            <h3>My Post</h3>

            <div>
                <div>
                    <textarea onChange={onPostChange}  ref={newPostElement} value={props.state.profilePage.newPostText}/>
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