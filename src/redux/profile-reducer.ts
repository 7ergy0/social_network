import {ActionsType, ProfilePageType} from "./store";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState={
        postsData: [
            {id: 1, message: "How are you", likesCount: 12},
            {id: 2, message: "It' my first post", likesCount: 34},
            {id: 3, message: "How are you?", likesCount: 32}
        ],
        newPostText: "it-kamasutra.com",
    };
const profileReducer = (state:ProfilePageType=initialState, action: ActionsType)=> {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 5, message: state.newPostText, likesCount: 0}
            return {...state,
                postsData:[...state.postsData,newPost],
            newPostText:""}

        //-------------Рефакторинг------------------
            // let newPost = {id: 5, message: state.newPostText, likesCount: 0};
            // let stateCopy={...state}
            // stateCopy.postsData=[...state.postsData];
            // stateCopy.postsData.push(newPost)
            // stateCopy.newPostText = ""
            //return stateCopy;

        case UPDATE_NEW_POST_TEXT:
        return {...state,
            newPostText:action.newText}

            // let stateCopy2={...state}
            // stateCopy2.newPostText = action.newText
            // return stateCopy2;
        default:
            return state
    }


}
export const addPostActionCreator = () =>({type: ADD_POST}) as const

export const updateNewPostTextActionCreator = (text: string)=>(
    {type: UPDATE_NEW_POST_TEXT,
    newText: text}) as const

export default profileReducer;