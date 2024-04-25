import { createSlice } from "@reduxjs/toolkit";
import { RegisterData } from "../../services";
import { toast } from "react-toastify";

const registerSlice = createSlice({
    name: "register",
    initialState: {
        isLoading: false,
        userData: null,
        registerIsError: false
    },
    extraReducers: (builder) => {
        builder.addCase(RegisterData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(RegisterData.fulfilled, (state, action) => {
            state.isLoading = false
            state.userData = action.payload
            toast.success(`Kayıt işleminiz gerçekleşmiştir. Hoşgeldiniz. 🙂`)
            setTimeout(() => {
                window.location.href = "/login"
            }, 2000);
        })
        builder.addCase(RegisterData.rejected, (state, action) => {
            console.log("Error", action.payload)
            state.registerIsError = true
            toast.error("Kayıt işleminizde bir sorun oluştu!", action.payload)
        })
    }
})

export default registerSlice.reducer