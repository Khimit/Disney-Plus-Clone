import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: "",
    profilePhoto: "",
    userEmail:""
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action)=>{
            state.userName = action.payload.userName;
            state.profilePhoto = action.payload.profilePhoto;
            state.userEmail = action.payload.userEmail;
        },
        removeUserData: (state) => {
            state.userName = "";
            state.userEmail = "";
            state.profilePhoto = "";
        }
    }
});

export const { setUserData, removeUserData } = userSlice.actions;
export default userSlice.reducer;

