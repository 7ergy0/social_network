import React from "react";



export const required=(value:number)=>(value?undefined:'Field is required');


export const maxLength=(max:number)=>(value:any)=>(value && value.length>max?`Must be ${max} symbols or less`:undefined);
