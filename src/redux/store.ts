import {addPostActionCreator, setUserProfile, updateNewPostTextActionCreator} from "./profile-reducer";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "./dialogs-reducer";
import {
    follow, followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUser,
    toggleIsFetching, toggleIsFollowing,
    unfollow, unfollowSuccess
} from "./users-reducer";
import {setAuthData} from "./authReducer";
import store from "./redux-store";


type MessageType = {
    id: number
    message: string
}
type DialogsType = {
    id: number
    name: string
}
type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    postsData: PostsType[]
    newPostText: string
}
export type DialogsPageType = {
    messagesData: MessageType[]
    dialogsData: DialogsType[]
    newMessageBody: string
}
export type SidebarType = {}


export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType


}

export type RootStoreType = {
    _state: StateType
    _callSubscriber: () => void
    dispatch: (action: ActionsType) => void
    getState: () => StateType
    subscribe: (callback: () => void) => void

}

export type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof sendMessageActionCreator>
    | ReturnType<typeof updateNewMessageBodyActionCreator>
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUser>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthData>
    | ReturnType<typeof toggleIsFollowing>


// let store= {
//     _state: {
//         profilePage: {
//             postsData: [
//                 {id: 1, message: "How are you", likesCount: 12},
//                 {id: 2, message: "It' my first post", likesCount: 34},
//                 {id: 3, message: "How are you?", likesCount: 32}
//             ],
//             newPostText: "it-kamasutra.com",
//         },
//         dialogsPage: {
//             messagesData: [
//                 {id: 1, message: "Hi!"},
//                 {id: 2, message: "How are you?!"},
//                 {id: 3, message: "Hi!"},
//                 {id: 4, message: "Hi!"}
//             ],
//             newMessageBody: "",
//             dialogsData: [
//                 {id: 1, name: "Sergey"},
//                 {id: 2, name: "Alexey"},
//                 {id: 3, name: "Aleksandr"},
//                 {id: 4, name: "Olga"}
//             ]
//         },
//         sidebar: {}
//     },
//     _callSubscriber() {
//         console.log("State change")
//     },
//     dispatch(action: ActionsType) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//
//         this._callSubscriber()
//     },
// //     getState() {
// //         return this._state
// //     },
// //     subscribe(callback) {
// //         this._callSubscriber = callback
// //     }
// //
// // }
// export default store;

// @ts-ignore
window.store = store

