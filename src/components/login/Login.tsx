import React from "react";
import {Field, reduxForm} from "redux-form";




function LoginForm(props:any){
    const {handleSubmit}=props
    return(
        <form onSubmit={handleSubmit}>
            <div>
            <Field placeholder={'login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'checkbox'} component={'input'}/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>


        </form>

    )
}
let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

function Login(){
    const onSubmit=(values:any)=>{
        console.log(values)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>

    </div>
}
export default Login;