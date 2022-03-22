import React, {ChangeEvent, useEffect, useState} from "react";


type ProfileStatusPropsType = {
    status:string
    updateStatusProfile:(newStatus:string)=>void
}


function ProfileStatusWithHooks(props:ProfileStatusPropsType){
    console.log('render')
    const [editMode,setEditMode]=useState(false)
    const [status,setStatus]=useState(props.status)

    useEffect(()=>{
        console.log('Effect')
        setStatus(props.status)
    },[props.status])

   const activeEditMode = () => {
        setEditMode(true)
    };

    const activeViewMode = () => {
       setEditMode(false)
        props.updateStatusProfile(status)
    };

const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
};
        return (

            <div>
                {
                    editMode

                        ? <input value={status} onChange={onChangeStatus} onBlur={activeViewMode}
                                 autoFocus/>
                        : <span onDoubleClick={activeEditMode}><b>Status:</b> {props.status || "-----"}</span>
                }


            </div>
        )

}

export default ProfileStatusWithHooks;

