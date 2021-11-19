import {ActionsType, DialogsPageType} from "./store";


const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"

const initialState:DialogsPageType= {
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
    };
const dialogsReducer = (state=initialState, action: ActionsType)=> {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = {id: 5, message: state.newMessageBody = action.postBody}
            state.messagesData.push(body)
            state.newMessageBody = ""
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state;
        default:
            return state;
    }


}
export const sendMessageActionCreator = (postBody: string): ActionsType =>
    ({type: SEND_MESSAGE, postBody: postBody})
export const updateNewMessageBodyActionCreator = (body: string): ActionsType =>
    ({type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})
export default dialogsReducer;