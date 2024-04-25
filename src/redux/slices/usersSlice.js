import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../../services";
import { toast } from "react-toastify";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: null,
        page: 1,
        isLoading: false,
        userIsError: false
    },
    extraReducers: (builder) => {
        builder.addCase(UsersData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(UsersData.fulfilled, (state, action) => {
            state.users = action.payload
        })
        builder.addCase(UsersData.rejected, (state, action) => {
            console.log("Error", action.error)
            state.userIsError = true
            toast.error(action.error)
        })
    }
})

export default usersSlice.reducer