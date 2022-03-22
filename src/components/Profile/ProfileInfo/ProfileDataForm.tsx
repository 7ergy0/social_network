import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "../../../common/formsControls/FormsControls.module.css";


interface ProfileType{
profile:any
}
interface ProfileDataFormType{
    fullName: string
    lookingForAJob: string
    myProfessionalSkills: string
    aboutMe: string
}
const ProfileDataForm = ({profile,error, ...props}: ProfileType & InjectedFormProps<ProfileDataFormType, ProfileType>) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            {
               error && <div className={s.formError}>
                    {error}
                </div>
            }
            <div>
                <button>save</button>
            </div>
            <div>
                <label htmlFor={"fullName"}><b>Full name:</b></label>
                <Field name={"fullName"} component={"input"} type={"text"}/>
            </div>
            <div>
                <label htmlFor={"lookingForAJob"}><b>Looking for a job:</b></label>
                <Field name={"lookingForAJob"} component={"input"} type={"checkbox"}/>
            </div>

            <div>
                <label htmlFor={"myProfessionalSkills"}><b>My professional skills:</b></label>
                <Field name={"lookingForAJobDescription"} component={"input"} type={"text"}/>
            </div>

            <div>
                <label htmlFor={"aboutMe"}><b>About me:</b></label>
                <Field name={"aboutMe"} component={"input"} type={"text"}/>
            </div>
            <div>
                <b>Contacts:</b>{Object.keys(profile.contacts).map((m,index)=>{
                return <div key={index}>
                    <b>{m}:</b>
                    <Field name={"contacts."+m} component={"input"} type={"text"} />

                </div>
                })}

            </div>
        </form>
    )
}
let ProfileDataForms = reduxForm<ProfileDataFormType,ProfileType>({
    form: 'contacts'
})(ProfileDataForm)

export default ProfileDataForms;