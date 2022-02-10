import React, {ComponentType} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    defaultProfile, getPhotoProfile,
    getStatusProfile,
    updateStatusProfile
} from "../../redux/profile-reducer";
import {RootStateType} from "../../redux/redux-store";
import { withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from "@reduxjs/toolkit";



type mapsStateToPropsType = {
    profile: any
    status:string
    authUserId:null
    isAuth:boolean
}

export type ProfileContainerType = mapsStateToPropsType

class ProfileContainer extends React.Component<any, ProfileContainerType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
            if(!userId){
                this.props.history.push('/login')
            }
        }
        // profileApi.defaultUser(userId).then(data=> {
        //     this.props.setUserProfile(data)
        // });
        this.props.defaultProfile(userId);
        this.props.getStatusProfile(userId);
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status} updateStatusProfile={this.props.updateStatusProfile}/>
        )
    }
}
let mapStateToProps = (state: RootStateType): mapsStateToPropsType => ({
    profile: state.profilePage.profile,
    status:state.profilePage.status,
    authUserId: state.auth.userId,
    isAuth:state.auth.isAuth

});

export default compose<ComponentType>(connect(mapStateToProps, {defaultProfile,getStatusProfile,updateStatusProfile,getPhotoProfile}),withRouter,withAuthRedirect)(ProfileContainer);
