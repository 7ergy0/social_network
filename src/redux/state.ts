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
}
type SidebarType = {}


export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type RootStoreType = {
    _state: StateType
    _callSubscriber:()=>void
    _addPost:(newText:string)=>void
    _updateNewPostText:(newText:string)=>void
    dispatch:(action:any)=>void
    getState:()=>StateType
    subscribe:(callback:()=>void)=>void




}


const ADD_POST= "ADD-POST"
const UPDATE_NEW_POST_TEXT= "UPDATE-NEW-POST-TEXT"


let store:RootStoreType= {
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
    _addPost(newText:string) {
        let newPost:PostsType = {id: 5, message: this._state.profilePage.newPostText=newText, likesCount: 0};
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = ""
        this._callSubscriber()
    },
    _updateNewPostText(newText:string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },
    dispatch(action:any){
        if(action.type===ADD_POST){
            this._addPost(action.newText)
        }else if (action.type===UPDATE_NEW_POST_TEXT){
            this._updateNewPostText(action.newText)
        }
    },
    getState() {
        return this._state
    },
    subscribe(callback) {
        this._callSubscriber = callback
    }

}
export const addPostActionCreator=()=>({type:ADD_POST})

export const updateNewPostTextActionCreation=(text:string)=>({type:UPDATE_NEW_POST_TEXT,newText:text})
export default store;

