import {ActionsType} from "./store";
import {Dispatch} from "@reduxjs/toolkit";
import {authApi, ResultCode, securityApi} from "../api/Api";
import {stopSubmit} from "redux-form";

import {RootThunkTypes} from "./redux-store";


const SET_AUTH_DATA = "auth/SET_AUTH_DATA"
const SET_CAPTCHA_URL = "auth/SET_CAPTCHA_URL"


let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null

};
type initialStateType = typeof initialState

export const authReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {

        case SET_AUTH_DATA:
        case SET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}


export const setAuthData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_AUTH_DATA,
    payload: {userId, email, login, isAuth}
}) as const
export const setCaptchaUrl = (captchaUrl: string|null) => ({type: SET_CAPTCHA_URL, payload: {captchaUrl}}) as const

export const getAuthUserData = () => async (dispatch: Dispatch) => {

    let data = await authApi.getMyProfile();
    if (data.resultCode === ResultCode.success) {
        dispatch(setAuthData(data.data.id, data.data.email, data.data.login, true));
    }
};
export const loginProfile = (email: string, password: string, rememberMe: boolean,captchaUrl=null): RootThunkTypes => async (dispatch) => {
    let data = await authApi.login(email, password, rememberMe,captchaUrl)
    if (data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        dispatch(getCaptchaUrl())
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}))

    }

}
export const getCaptchaUrl = (): RootThunkTypes => async (dispatch) => {
    let data = await securityApi.getCaptchaUrl()
    dispatch(setCaptchaUrl(data.url))
}
export const logoutProfile = () => async (dispatch: Dispatch) => {
    let data = await authApi.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false))
    }
}
export default authReducer;





