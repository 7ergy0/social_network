import {ActionsType, DialogsPageType} from "./store";


const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"

const initialState= {
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

const dialogsReducer = (state:DialogsPageType=initialState, action: ActionsType)=> {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = {id: 5, message: state.newMessageBody }
            let stateCopy={...state}
            stateCopy.messagesData=[...state.messagesData]
            stateCopy.messagesData.push(body)
            stateCopy.newMessageBody = ""
            return stateCopy;
        case UPDATE_NEW_MESSAGE_BODY:
            let stateCopy2={...state}
            stateCopy2.newMessageBody = action.body
            return stateCopy2;
        default:
            return state;
    }


}
export const sendMessageActionCreator = ()=>
    ({type: SEND_MESSAGE}) as const
export const updateNewMessageBodyActionCreator = (text: string)=>
    ({type: UPDATE_NEW_MESSAGE_BODY,
    body: text
}) as const
export default dialogsReducer;