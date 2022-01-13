import React, {ReactNode} from "react";

type ProfileStatusType = {
    title: string
    editMode: boolean

}


class ProfileStatus extends React.Component<any, ProfileStatusType> {
    state = {
        editMode: false,
        title: "",
    }

    activeEditMode() {
        this.setState({
            editMode: true
        })
    }

    activeViewMode() {
        this.setState({
            editMode: false
        })
    }

    render(): ReactNode {
        return (
            <div>
                {
                    this.state.editMode

                        ? <input value={this.props.status} onBlur={this.activeViewMode.bind(this)} autoFocus/>
                        : <span onDoubleClick={this.activeEditMode.bind(this)}>{this.props.status}</span>
                }


            </div>
        )
    }
}

export default ProfileStatus;

