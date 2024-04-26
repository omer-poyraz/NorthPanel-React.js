import { createSlice } from "@reduxjs/toolkit";
import { CategoryUpdateData } from "../../services";
import { toast } from "react-toastify";

const categoryUpdateSlice = createSlice({
    name: "categoryUpdate",
    initialState: {
        category: null,
        isLoading: false,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(CategoryUpdateData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(CategoryUpdateData.fulfilled, (state, action) => {
            state.category = action.payload
            toast.success("Kategori başarıyla güncellendi.")
        })
        builder.addCase(CategoryUpdateData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(`${action.error}`)
        })
    }
})

export default categoryUpdateSlice.reducer