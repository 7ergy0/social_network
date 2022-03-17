import React, {ChangeEvent} from "react";
import s from "./ProfilePhoto.module.css"
import userPhoto from "../../../assets/images/users.png"



type ProfilePhotoType = {
    editMode: boolean
    status: string
    image: any
    isOwner: any


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
    onSavePhotoProfile=(e:ChangeEvent<HTMLInputElement> )=>{
        if(e.currentTarget.files){
      this.props.savePhotoProfile(e.currentTarget.files[0])
        }
    }
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
            <div className={s.photo}>
                { this.state.editMode && this.props.isOwner
                ? <input type={"file"} onChange={this.onSavePhotoProfile}/>
                :<span><img src={this.props.image || userPhoto } onDoubleClick={this.activeEditMode}
                    /></span>}

            </div>
        )
    }
}

export default ProfilePhoto;

