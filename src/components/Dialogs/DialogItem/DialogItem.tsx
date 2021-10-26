import React from "react";
import {NavLink} from "react-router-dom";
import s from './../Dialogs.module.css'

function DialogItem(props: any) {
    return (<div className={s.item}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.activeItem}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;