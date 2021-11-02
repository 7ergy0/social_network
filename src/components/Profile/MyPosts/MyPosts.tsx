import React from "react";
import n from './MyPosts.module.css'
import Post from "./Post/Post";
import {PropType} from "../../../App";
import {addPosts, updateNewPostText} from "../../../redux/state";


function MyPosts(props: PropType) {

    let postsElement =
        props.state.profilePage.postsData.map(m => <Post message={m.message} likesCount={m.likesCount}/>)

    let newPostElement: any = React.createRef()
    let addPost = () => {
        addPosts()
    }
    let onPostChange = () => {
        let text: any = newPostElement.current.value
        updateNewPostText(text)
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