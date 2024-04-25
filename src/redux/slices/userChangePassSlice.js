import { createSlice } from "@reduxjs/toolkit";
import { UserChangePassData } from "../../services";
import { toast } from "react-toastify";

const changePassSlice = createSlice({
    name: "userChangePass",
    initialState: {
        user: null,
        isLoading: false,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(UserChangePassData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(UserChangePassData.fulfilled, (state, action) => {
            state.user = action.payload
            toast.success(`${action.payload.userName}, şifreniz güncellendi!`)
        })
        builder.addCase(UserChangePassData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default changePassSlice.reducer