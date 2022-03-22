import * as axios from "axios";
import {PhotosType, ProfileType} from "../types";



const instant=axios.default.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY':'d63defdb-0459-40a2-9e7d-c1b6f429e0a6'
    }
})

export const usersApi={
    getUsers(currentPage:number,pageSize:number){
        return instant.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=>response.data)
    }
};
export const profileApi={
    defaultUser(userId:number){
        return instant.get<ProfileType>('profile/'+userId)
            .then(response=>response.data)
    },
    getStatus(userId:number){
        return instant.get('profile/status/'+userId)
            .then(response=>response.data)
    },
    updateStatus(status:string){
        return instant.put<ProfileStatusType>('profile/status',{status:status})
            .then(response=>response.data)
    },
    setPhoto(image:any){
        let formData=new FormData();
        formData.append('file', image);
        return instant.put<UpdatePhotoType>('profile/photo',formData,{
            headers:{

                'Content-Type': `multipart/form-data; boundary=${image._boundary}`,
            }
        })
            .then(response=>response.data)
    },
    setProfile(profile:ProfileType){
        return instant.put<ProfileStatusType>('profile',profile)
            .then(response=>response.data)
    }
};
export const authApi={
    getMyProfile(){
        return instant.get<AuthMeType>('auth/me')
            .then(response=>response.data)
    },
    login(email:string,password:string,rememberMe:boolean){
        return instant.post<LoginLogoutType>('auth/login',{email,password,rememberMe})
            .then(response=>response.data)
    },
    logout(){
        return instant.delete<LoginLogoutType>('auth/login')
            .then(response=>response.data)
    }
};
export const followApi={
    followUser(id:number){
        return instant.post('follow/'+id)
            .then(response=>response.data)
    },
    unfollowUser(id:number){
        return instant.delete('follow/'+id)
            .then(response=>response.data)
    }
};
export enum ResultCode{
    success=0,
    error=1
}

type ProfileStatusType<D={}>={
    resultCode: ResultCode
    messages: string[]
    data: D

}
type UpdatePhotoType={
    data:PhotosType
    resultCode:ResultCode
    messages: string[]
}
type DataType={
    id: number
    email: string
    login: string
}
type AuthMeType={
    data: DataType
    resultCode: ResultCode
    messages: string[]

}
type LoginLogoutType={
    resultCode: ResultCode
    messages: string[]
    data: DataType

}