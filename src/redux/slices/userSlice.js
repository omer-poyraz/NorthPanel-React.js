import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../../services";
import { toast } from "react-toastify";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        isLoading: false,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(UserData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(UserData.fulfilled, (state, action) => {
            state.user = action.payload
        })
        builder.addCase(UserData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default userSlice.reducer