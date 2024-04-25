import { createSlice } from "@reduxjs/toolkit";
import { AddressUpdateData } from "../../services";
import { toast } from "react-toastify";

const addressUpdateSlice = createSlice({
    name: "addressUpdate",
    initialState: {
        address: null,
        isLoading: false,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(AddressUpdateData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(AddressUpdateData.fulfilled, (state, action) => {
            state.address = action.payload
        })
        builder.addCase(AddressUpdateData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default addressUpdateSlice.reducer