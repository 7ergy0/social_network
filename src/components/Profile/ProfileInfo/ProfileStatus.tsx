import React, {ChangeEvent, ReactNode} from "react";


type ProfileStatusType = {
    editMode: boolean
    status:string


}


class ProfileStatus extends React.Component<any, ProfileStatusType> {
    state = {
        editMode: false,
        status:this.props.status,

    }

    activeEditMode=()=> {
        this.setState({
            editMode: true
        })

    };

    activeViewMode=()=> {
        this.setState({
            editMode: false
        })
        this.props.updateStatusProfile(this.state.status)
    };
    onChangeStatus=(e:ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            status: e.currentTarget.value
        })
    };

    render(): ReactNode {
        return (
            <div>
                {
                    this.state.editMode

                        ? <input value={this.state.status} onChange={this.onChangeStatus} onBlur={this.activeViewMode} autoFocus/>
                        : <span onDoubleClick={this.activeEditMode}>{this.props.status || "-----"}</span>
                }


            </div>
        )
    }
}

export default ProfileStatus;

