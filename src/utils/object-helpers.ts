

export const utilsFunction=(stateUsers:any,id:string,actionUserId:any,followed:any)=>{
return stateUsers.map((m:any) => {
        if (m[id] === actionUserId) {
            return {...m, ...followed}
        }
        return m
    })
}

