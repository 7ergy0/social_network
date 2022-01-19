import {ActionsType} from "./store";


const SEND_MESSAGE = "SEND-MESSAGE"
//const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"

const initialState= {
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
    };

export type initialDialogsPageType=typeof initialState

const dialogsReducer = (state:initialDialogsPageType=initialState, action: ActionsType):initialDialogsPageType=> {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = {id: 5, message: action.addMessageBody }
            return {...state,
                messagesData:[...state.messagesData,body]}
            // let stateCopy={...state}
            // stateCopy.messagesData=[...state.messagesData]
            // stateCopy.messagesData.push(body)
            // stateCopy.newMessageBody = ""
            //return stateCopy;
        // case UPDATE_NEW_MESSAGE_BODY:
        //     return {...state,
        //         newMessageBody:action.body}
            // let stateCopy2={...state}
            // stateCopy2.newMessageBody = action.body
            // return stateCopy2;
        default:
            return state;
    }


}
export const sendMessageActionCreator = (addMessageBody:string)=>
    ({type: SEND_MESSAGE,addMessageBody}) as const
// export const updateNewMessageBodyActionCreator = (text: string)=>
//     ({type: UPDATE_NEW_MESSAGE_BODY,
//     body: text
// }) as const
export default dialogsReducer;