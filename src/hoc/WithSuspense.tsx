import {Component, ComponentType, Suspense} from "react";


export function WithSuspense<T>(Component: ComponentType<T>){
    return function (props: any){
        return <Suspense fallback={<div>Loading...</div>}>
            <Component {...props as T}/>
        </Suspense>
    }
}