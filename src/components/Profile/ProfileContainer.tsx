import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {defaultProfile} from "../../redux/profile-reducer";
import {RootStateType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";




type mapsStateToPropsType = {
    profile:any
}

export type ProfileContainerType=mapsStateToPropsType

class ProfileContainer extends React.Component<any, ProfileContainerType> {

    componentDidMount() {
        let userId=this.props.match.params.userId
        if(!userId){
            userId=2;
        }
        // profileApi.defaultUser(userId).then(data=> {
        //     this.props.setUserProfile(data)
        // });
        this.props.defaultProfile(userId)
    }

    render() {

        return (

            <Profile {...this.props} profile={this.props.profile}/>
        )
    }


}

let mapStateToProps = (state: RootStateType):mapsStateToPropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent=withRouter(ProfileContainer)

export default connect(mapStateToProps, {defaultProfile})(WithUrlDataContainerComponent);