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
    }
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;

