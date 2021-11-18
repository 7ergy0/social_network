import {ActionsType} from "./state";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const profileReducer = (state: any, action: any)=> {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 5, message: state.newPostText = action.newText, likesCount: 0};
            state.postsData.push(newPost);
            state.newPostText = ""
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;
        default:
            return state
    }


}
export const addPostActionCreator = (text: string): ActionsType =>
    ({type: ADD_POST, newText: text})
export const updateNewPostTextActionCreator = (text: string): ActionsType =>
    ({type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export default profileReducer;