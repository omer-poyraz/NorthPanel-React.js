import { createSlice } from "@reduxjs/toolkit";
import { UserUpdateData } from "../../services";
import { toast } from "react-toastify";

const userUpdateSlice = createSlice({
    name: "userUpdate",
    initialState: {
        user: null,
        isLoading: false,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(UserUpdateData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(UserUpdateData.fulfilled, (state, action) => {
            state.user = action.payload
            toast.success(`${action.payload.userName} başarıyla güncellendi.`)
        })
        builder.addCase(UserUpdateData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default userUpdateSlice.reducer