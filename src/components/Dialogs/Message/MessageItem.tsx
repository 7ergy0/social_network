import React from "react";
import s from './../Dialogs.module.css'



function MessageItem(props: any) {
    return (<div className={s.dialog}>{props.message}</div>

    )
}

export default MessageItem;