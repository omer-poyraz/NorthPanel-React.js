import { createSlice } from "@reduxjs/toolkit";
import { AppInfoUpdateData } from "../../services";
import { toast } from "react-toastify";

const appInfoUpdateSlice = createSlice({
    name: "appInfoUpdate",
    initialState: {
        appInfo: null,
        isLoading: false,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(AppInfoUpdateData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(AppInfoUpdateData.fulfilled, (state, action) => {
            state.appInfo = action.payload
            toast.success("Başarıyla güncellendi!")
        })
        builder.addCase(AppInfoUpdateData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default appInfoUpdateSlice.reducer