import React from "react";
import s from './Dialogs.module.css'
import MessageItem from "./Message/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsContainerType} from "./DialogsContainer";
import {Field, reduxForm} from "redux-form";








type DialogsType = {

}


function Dialogs(props:DialogsContainerType) {

    let dialogsElement = props.state.dialogsPage.dialogsData.map((m) => <DialogItem key={m.id} name={m.name}
                                                                                    id={m.id}/>)
    let messagesElement = props.state.dialogsPage.messagesData.map((m) => <MessageItem key={m.id} message={m.message}/>)

    let onSendMessageClick=(values:any)=>{
        props.sendMessageAction(values.addMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <div>
                   <DialogsReduxForm onSubmit={onSendMessageClick}/>
                </div>
            </div>
        </div>

    )
}
export default Dialogs;

function DialogAddMassageForm(props:any){
    return(
        <form onSubmit={props.handleSubmit}>
            <div><Field name={'addMessageBody'} component={'textarea'}placeholder={"Enter your message"}/></div>
            <div><button>Send</button></div>
        </form>
    )

}
let DialogsReduxForm=reduxForm({form:'dialogAddMessageForm'})(DialogAddMassageForm)

