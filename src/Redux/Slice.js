import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    UserName:null,
    UserEmail:null,
    UserPhoto:null


}

const Slice = createSlice({
  name: "user",
  initialState,
  reducers: {
      UserLogIn:(state,action)=>{
          state.UserName=action.payload.UserName
          state.UserEmail=action.payload.UserEmail
          state.UserPhoto=action.payload.UserPhoto


      },
      UserLogOut:(state,action)=>{
        state.UserName=null;
        state.UserEmail=null;
        state.UserPhoto=null;

    },
  }
});

export const {UserLogIn,UserLogOut} = Slice.actions


export const selectUserName = state=> state.user.UserName
export const selectUserEmail = state=> state.user.UserEmail
export const selectUserPhoto = state=> state.user.UserPhoto

export default Slice.reducer