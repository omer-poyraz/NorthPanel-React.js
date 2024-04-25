import { createSlice } from "@reduxjs/toolkit";
import { AddressesData } from "../../services";
import { toast } from "react-toastify";

const addressesSlice = createSlice({
    name: "addressesSlice",
    initialState: {
        addresses: null,
        isLoading: false,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(AddressesData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(AddressesData.fulfilled, (state, action) => {
            state.addresses = action.payload
        })
        builder.addCase(AddressesData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default addressesSlice.reducer