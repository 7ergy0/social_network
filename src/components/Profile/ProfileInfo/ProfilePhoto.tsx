import React from "react";




type ProfilePhotoType = {
    editMode: boolean
    status: string
    image: any


}


class ProfilePhoto extends React.Component<any, ProfilePhotoType> {
    state: any = {
        editMode: false,
        image: this.props.image,


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
        this.props.updateStatusProfile(this.state.image)
    };

    // onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    //     this.setState({
    //         status: e.currentTarget.value
    //     })
    // };
    //
    // componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<ProfilePhotoType>, snapshot?: any) {
    //     if (prevProps.image !== this.props.image) {
    //         this.setState({
    //             //image: this.props.image
    //         });
    //     }
    // }


    render() {
        return (
            <div>
                {
                    this.state.editMode

                        ? <button style={{width: '50px', height: '50px'}}>load photo</button>
                        : <img src={this.props.image} onDoubleClick={this.activeEditMode}
                               style={{width: '50px', height: '50px'}}/>}

                {/*// : <span onDoubleClick={this.activeEditMode}>{this.props.image || "-----"}</span>*/}


            </div>
        )
    }
}

export default ProfilePhoto;

