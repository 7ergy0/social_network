import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import MessageItem from "./Message/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsContainerType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";






type DialogsType = {

}


function Dialogs(props:DialogsContainerType) {

    let dialogsElement = props.state.dialogsPage.dialogsData.map((m) => <DialogItem key={m.id} name={m.name}
                                                                                    id={m.id}/>)
    let messagesElement = props.state.dialogsPage.messagesData.map((m) => <MessageItem key={m.id} message={m.message}/>)

    let onSendMessageClick=()=>{
props.sendMessageAction()
    }
    let addPostBody = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let text=e.target.value
        props.updateNewMessageBodyAction(text)


    }
    if(!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <div>
                   <div><textarea onChange={addPostBody} value={props.newMessage} placeholder={"Enter your message"}/></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>

    )
}

export default Dialogs