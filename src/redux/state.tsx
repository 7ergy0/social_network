
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
}
type DialogsPageType={
    messagesData:MessageType[]
    dialogsData:DialogsType[]
}
type SidebarType={}

type RootStateType={
    profilePage:ProfilePageType
    dialogsPage:DialogsPageType
    sidebar:SidebarType
}

let state:RootStateType={
    profilePage:{
    postsData : [
        {id: 1, message: "How are you", likesCount: 12},
        {id: 2, message: "It' my first post", likesCount: 34},
        {id: 3, message: "How are you?", likesCount: 32}
    ]},
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
}
export default state;