import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";



type DialogsType = {


}


function DialogsContainer(props: DialogsType) {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    let sendMessageAction = () => {
                        store.dispatch(sendMessageActionCreator())
                    }
                    let updateNewMessageBodyAction = (text: string) => {
                        store.dispatch(updateNewMessageBodyActionCreator(text))


                    }
                    return <Dialogs sendMessageAction={sendMessageAction}
                                    updateNewMessageBodyAction={updateNewMessageBodyAction}
                                    newMessage={state.dialogsPage.newMessageBody}
                                    state={state}/>
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;