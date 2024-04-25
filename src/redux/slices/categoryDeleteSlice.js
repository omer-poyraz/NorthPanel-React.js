import { createSlice } from "@reduxjs/toolkit";
import { CategoryDeleteData } from "../../services";
import { toast } from "react-toastify";

const categoryDeleteSlice = createSlice({
    name: "categoryDelete",
    initialState: {
        category: null,
        isLoading: false,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(CategoryDeleteData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(CategoryDeleteData.fulfilled, (state, action) => {
            state.category = action.payload
            toast.success("Başarıyla silindi!")
        })
        builder.addCase(CategoryDeleteData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default categoryDeleteSlice.reducer