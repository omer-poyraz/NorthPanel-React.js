import { createSlice } from "@reduxjs/toolkit";
import { LoginData } from '../../services'
import { toast } from "react-toastify";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        accessToken: "",
        isLogin: false,
        loginDatas: null,
        loginIsError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(LoginData.pending, (state, action) => {
            state.isLogin = true
        })
        builder.addCase(LoginData.fulfilled, (state, action) => {
            state.isLogin = false
            state.loginDatas = action.payload
            state.accessToken = action.payload.accessToken
            localStorage.setItem("token", action.payload.accessToken)
            localStorage.setItem("userId", action.payload.userId)
            toast.success("Giriş işlemi başarılı.🙂")
            setTimeout(() => {
                window.location.href = "/main"
            }, 2000);
        })
        builder.addCase(LoginData.rejected, (state, action) => {
            console.log("Error", action.payload)
            state.loginIsError = true
            toast.error("Lütfen bilgilerinizi kontrol ediniz!")
        })
    }
})

export default loginSlice.reducer