import { createSlice } from "@reduxjs/toolkit";

const editUserSlice = createSlice({
    name: "editUser",
    initialState: {
        user: null
    },
    reducers: {
        selectUser(state, action) {
            state.user = action.payload.user
        }
    }
})

export const { selectUser } = editUserSlice.actions
export default editUserSlice.reducer