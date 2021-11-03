type MessageType={
    id:number
    message:string
}
type DialogsType={
    id:number
    name:string
}
type PostsType={
    id:number
    message:string
    likesCount:number
}
type ProfilePageType={
    postsData:PostsType[]
    newPostText:string
}
type DialogsPageType={
    messagesData:MessageType[]
    dialogsData:DialogsType[]
}
type SidebarType={}

export type RootStateType={
    profilePage:ProfilePageType
    dialogsPage:DialogsPageType
    sidebar:SidebarType
}


let store={
    _state:{
        profilePage:{
            postsData : [
                {id: 1, message: "How are you", likesCount: 12},
                {id: 2, message: "It' my first post", likesCount: 34},
                {id: 3, message: "How are you?", likesCount: 32}
            ],
            newPostText:"it-kamasutra.com",
        },
        dialogsPage:{
            messagesData : [
                {id: 1, message: "Hi!"},
                {id: 2, message: "How are you?!"},
                {id: 3, message: "Hi!"},
                {id: 4, message: "Hi!"}
            ],
            dialogsData : [
                {id: 1, name: "Sergey"},
                {id: 2, name: "Alexey"},
                {id: 3, name: "Aleksandr"},
                {id: 4, name: "Olga"}
            ]},
        sidebar:{}
    },
    getState(){
        return this._state
    },
    _callSubscriber(){
    },
    addPosts(){
        let newPost={id:5,message:this._state.profilePage.newPostText,likesCount:0};
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText=""
        this._callSubscriber()
    },
    updateNewPostText(newText:any){
        this._state.profilePage.newPostText=newText
        this._callSubscriber()
    },
    subscribe(observer:any){
        this._callSubscriber=observer
    }
}

export default store;
