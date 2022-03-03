import React from "react";
import s from './FormsControls.module.css'


const FormControl=({input,meta,...props}:any)=>{
    const hasError=meta.touched && meta.error;
    return(
        <div className={`${s.formControl} ${hasError?s.error:""}`}>
            <div>
                {props.children}
            </div>
            {hasError && <span className={s.error}>{meta.error}</span>}
        </div>
    )
}

export function Textarea(props:any){
    const {input,meta,children,...restProps}=props
    return( <FormControl{...props}> <textarea {...input} {...restProps}/></FormControl>
    )
}
export function Input(props:any) {
    const {input, meta, children, ...restProps} = props
    return (<FormControl{...props}> <input {...input} {...restProps}/></FormControl>
    )
}

