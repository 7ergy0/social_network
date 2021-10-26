import React from "react";
import s from './Dialogs.module.css'
import MessageItem from "./Message/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import state from "../../redux/state";


function Dialogs() {
    let dialogsElement= state.dialogsPage.dialogsData.map(m=> <DialogItem name={m.name} id={m.id}/>)
    let messagesElement=state.dialogsPage.messagesData.map(m=> <MessageItem message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}

            </div>
        </div>

    )
}

export default Dialogs