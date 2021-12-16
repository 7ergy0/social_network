import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import { setUserProfile} from "../../redux/profile-reducer";
import {RootStateType} from "../../redux/redux-store";


type mapsStateToPropsType = {
    profile:[]
}

export type ProfileContainerType=mapsStateToPropsType

class ProfileContainer extends React.Component<any, ProfileContainerType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(response => {
            this.props.setUserProfile(response.data)
        });
    }

    render() {
        return (

            <Profile {...this.props} profile={this.props.profile}/>
        )
    }


}

let mapStateToProps = (state: RootStateType) => ({
    profile: state.profilePage.profile
})
export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);