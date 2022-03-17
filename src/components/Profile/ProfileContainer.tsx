import React, {ComponentType} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    defaultProfile, savePhotoProfile,
    getStatusProfile,
    updateStatusProfile
} from "../../redux/profile-reducer";
import {RootStateType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "@reduxjs/toolkit";
import {ProfileType} from "../../types";


type mapsStateToPropsType = {
    profile: ProfileType | null
    status: string
    authUserId: number | null
    isAuth: boolean

}

export type ProfileContainerType = mapsStateToPropsType

class ProfileContainer extends React.Component<any, RootStateType> {

    refreshProfile() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.defaultProfile(userId);
        this.props.getStatusProfile(userId);
    }


    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<RootStateType>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status}
                     updateStatusProfile={this.props.updateStatusProfile}
                     isOwner={!this.props.match.params.userId}
                     savePhotoProfile={this.props.savePhotoProfile}/>
        )
    }
}

let mapStateToProps = (state: RootStateType): mapsStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth,


});

export default compose<ComponentType>(connect(mapStateToProps, {
    defaultProfile,
    getStatusProfile,
    updateStatusProfile,
    savePhotoProfile
}), withRouter, withAuthRedirect)(ProfileContainer);
