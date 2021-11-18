import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
type ProfilePageType = {
    postsData: PostsType[]
    newPostText: string
}
type DialogsPageType = {
    messagesData: MessageType[]
    dialogsData: DialogsType[]
    newMessageBody: string
}
type SidebarType = {}


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
type AddPostActionType = {
    type: "ADD-POST"
    newText: string
}
type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
type SendMessageActionType = {
    type: "SEND-MESSAGE"
    postBody: string
}
type updateNewMessageBodyActionType = {
    type: "UPDATE-NEW-MESSAGE-BODY"
    body: string
}
export type ActionsType = AddPostActionType | UpdateNewPostTextActionType
    | SendMessageActionType | updateNewMessageBodyActionType


let store: RootStoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "How are you", likesCount: 12},
                {id: 2, message: "It' my first post", likesCount: 34},
                {id: 3, message: "How are you?", likesCount: 32}
            ],
            newPostText: "it-kamasutra.com",
        },
        dialogsPage: {
            messagesData: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "How are you?!"},
                {id: 3, message: "Hi!"},
                {id: 4, message: "Hi!"}
            ],
            newMessageBody: "",
            dialogsData: [
                {id: 1, name: "Sergey"},
                {id: 2, name: "Alexey"},
                {id: 3, name: "Aleksandr"},
                {id: 4, name: "Olga"}
            ]
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("State change")
    },
    dispatch(action: ActionsType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber()
    },
    getState() {
        return this._state
    },
    subscribe(callback) {
        this._callSubscriber = callback
    }

}

export default store;

