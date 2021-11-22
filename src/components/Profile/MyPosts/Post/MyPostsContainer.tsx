import React from "react";
import MyPosts from "../MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import StoreContext from "../../../../StoreContext";



type MyPostType= {


}

function MyPostsContainer(props: MyPostType) {

    return (
        <StoreContext.Consumer>
            {
                store=>{
                    let state=store.getState()

                    let addPostAction= () => {
                        store.dispatch(addPostActionCreator())
                    }
                    let updateNewPostTextAction = (text:string) => {
                        store.dispatch(updateNewPostTextActionCreator(text))
                    }
              return   <MyPosts addPostAction={addPostAction}
                             updateNewPostTextAction={updateNewPostTextAction}
                             newPostText={state.profilePage.newPostText}
                             state={state}


                    />}
            }
        </StoreContext.Consumer>)
}

export default MyPostsContainer;