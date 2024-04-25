import { createSlice } from "@reduxjs/toolkit";
import { UserDeleteData } from "../../services";
import { toast } from "react-toastify";

const userDeleteSlice = createSlice({
    name: 'userDelete',
    initialState: {
        user: null,
        isLoading: false,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(UserDeleteData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(UserDeleteData.fulfilled, (state, action) => {
            state.user = action.payload
            toast.success(`${action.payload.userName} başarıyla silindi!`)
        })
        builder.addCase(UserDeleteData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default userDeleteSlice.reducer