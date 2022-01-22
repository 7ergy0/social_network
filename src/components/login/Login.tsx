import React, {ComponentType} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/formsControls/FormsControls";
import {required} from "../../utils/validators/Validators";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import s from '../../common/formsControls/FormsControls.module.css'
import {RootStateType} from "../../redux/redux-store";
import {compose} from "@reduxjs/toolkit";
import {loginProfile} from "../../redux/auth-Reducer";


type LoginFormType={
    email:string
    password:string
    rememberMe:boolean
}

function LoginForm(props:InjectedFormProps<LoginFormType>){
    const {handleSubmit}=props
    return(
        <form onSubmit={handleSubmit}>
            <div>
            <Field placeholder={'email'} name={'email'} component={Input} validate={required}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={Input} type={'password'} validate={required}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input}/>remember me
            </div>
            {
                props.error && <div className={s.formError}>
                    {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>


        </form>

    )
}
let LoginReduxForm = reduxForm<LoginFormType>({form: 'login'})(LoginForm)
type mapStateToPropsType={
    isAuth:any
    //getAuthUserData:(email:string,password:string,rememberMe:boolean)=>void
}
function Login(props:any){
    const onSubmit=(values:LoginFormType)=>{
        props.loginProfile(values.email,values.password,values.rememberMe)
    }
    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>

    </div>
}
const mapStateToProps=(state:RootStateType):mapStateToPropsType=>({
    isAuth:state.auth.isAuth

})
export default compose<ComponentType>( connect(mapStateToProps,{loginProfile}))(Login)