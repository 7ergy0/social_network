import React from "react";
import n from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostsContainerType} from "./Post/MyPostsContainer";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../common/formsControls/FormsControls";
import {maxLength, required} from "../../../utils/validators/Validators";


type MyPostType = {}

function MyPosts(props: MyPostsContainerType) {

    let postsElement =
        props.state.profilePage.postsData.map((m) => <Post key={m.id} message={m.message} likesCount={m.likesCount}/>)

    let addPost = (values:any) => {
        props.addPostAction(values.addMyPost)
    }
    // let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let text = e.target.value
    //     props.updateNewPostTextAction(text)
    // }

    return (
        <div className={n.postsBlock}>

            <h3>My Post</h3>

            <div>
             <AddMyPostForm onSubmit={addPost}/>
            </div>
            <div className={n.posts}>

                {postsElement}

            </div>
        </div>
    )
}

export default MyPosts;

function PostForm(props:any) {
    const maxLength50=maxLength(50)
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'addMyPost'} component={Textarea} validate={required}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>


    )
}

let AddMyPostForm = reduxForm({form: 'AddMyPostForm'})(PostForm)