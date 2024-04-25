import { createSlice } from "@reduxjs/toolkit";
import { AppInfosData } from "../../services";
import { toast } from "react-toastify";

const appInfosSlice = createSlice({
    name: "appInfos",
    initialState: {
        appInfo: null,
        isLoading: false,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(AppInfosData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(AppInfosData.fulfilled, (state, action) => {
            state.appInfo = action.payload
        })
        builder.addCase(AppInfosData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default appInfosSlice.reducer