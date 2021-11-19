import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import MessageItem from "./Message/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import {ActionsType, RootStoreType} from "../../redux/store";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";



type DialogsType = {
    store: RootStoreType
    dispatch:(action:ActionsType)=>void
    postBody:string
}


function Dialogs(props: DialogsType) {
    let dialogsElement = props.store._state.dialogsPage.dialogsData.map((m) => <DialogItem key={m.id} name={m.name}
                                                                                    id={m.id}/>)
    let messagesElement = props.store._state.dialogsPage.messagesData.map((m) => <MessageItem key={m.id} message={m.message}/>)

    let onSendMessageClick=()=>{
props.dispatch(sendMessageActionCreator(props.postBody))
    }
    let addPostBody = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageBodyActionCreator(e.target.value))


    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <div>
                   <div><textarea onChange={addPostBody} placeholder={"Enter your message"}/></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>

    )
}

export default Dialogs