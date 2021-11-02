import React from "react";
import s from './Dialogs.module.css'
import MessageItem from "./Message/MessageItem";
import DialogItem from "./DialogItem/DialogItem";

import {PropType} from "../../App";





function Dialogs(props:PropType) {
    let dialogsElement= props.state.dialogsPage.dialogsData.map(m=> <DialogItem key={m.id} name={m.name} id={m.id}/>)
    let messagesElement=props.state.dialogsPage.messagesData.map(m=> <MessageItem key={m.id} message={m.message}/>)
    let add=()=>{

    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <textarea onChange={add}/>
<button onClick={()=>{}}/>
            </div>
        </div>

    )
}

export default Dialogs