import { createSlice } from "@reduxjs/toolkit";
import { CategoriesData } from "../../services";
import { toast } from "react-toastify";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categories: null,
        isLoading: false,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(CategoriesData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(CategoriesData.fulfilled, (state, action) => {
            state.categories = action.payload
        })
        builder.addCase(CategoriesData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default categoriesSlice.reducer