import React, {ChangeEvent} from "react";


type ProfileStatusPropsType = {
    status:string
    updateStatusProfile:(newStatus:string)=>void
}
type StateType={
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, StateType> {
    state = {
        editMode: false,
        status: this.props.status,

    }

    activeEditMode = () => {
        this.setState({
            editMode: true
        })

    };

    activeViewMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusProfile(this.state.status)
    };

    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    };

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<StateType>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }


    render() {
        return (
            <div>
                {
                    this.state.editMode

                        ? <input value={this.state.status} onChange={this.onChangeStatus} onBlur={this.activeViewMode}
                                 autoFocus/>
                        : <span onDoubleClick={this.activeEditMode}>{this.props.status || "-----"}</span>
                }


            </div>
        )
    }
}

export default ProfileStatus;

