import {PhotosType, PostType, ProfileType} from "../types";
import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profile-reducer";

let state={
        postsData: [
            {id: 1, message: "How are you", likesCount: 12},
            {id: 2, message: "It' my first post", likesCount: 34},
            {id: 3, message: "How are you?", likesCount: 32}
        ] as Array<PostType>,
    profile:null as ProfileType|null,
    status:"",
    image:null as PhotosType|null
    };

test("new post should be added",()=>{
    let action=addPostActionCreator("It-kamasutra")

    let newState=profileReducer(state,action)

    expect(newState.postsData.length).toBe(4)
    expect(newState.postsData[3].message).toBe("It-kamasutra")
})
test("post should be deleted",()=>{
    let action=deletePostActionCreator(1)

    let newState=profileReducer(state,action)

    expect(newState.postsData[0].id).toBe(2)
})
