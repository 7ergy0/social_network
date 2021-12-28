import * as axios from "axios";




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
        return instant.get('profile/'+userId)
            .then(response=>response.data)
    }
};
export const authApi={
    getMyProfile(){
        return instant.get('auth/me')
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

