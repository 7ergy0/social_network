import {ActionsType} from "./state";


const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"


const dialogsReducer = (state: any, action: any)=> {
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