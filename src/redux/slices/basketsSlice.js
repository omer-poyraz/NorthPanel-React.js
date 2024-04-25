import { createSlice } from "@reduxjs/toolkit";
import { BasketsData } from "../../services";
import { toast } from "react-toastify";

const basketsSlice = createSlice({
    name: "baskets",
    initialState: {
        baskets: null,
        isLoading: true,
        isError: true
    },
    extraReducers: (builder) => {
        builder.addCase(BasketsData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(BasketsData.fulfilled, (state, action) => {
            state.baskets = action.payload
        })
        builder.addCase(BasketsData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default basketsSlice.reducer