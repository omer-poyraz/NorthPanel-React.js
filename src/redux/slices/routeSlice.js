import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const routeSlice = createSlice({
    name: "route",
    initialState: {
        id: 0
    },
    reducers: {
        changePage(state, action) {
            state.id = action.payload.id
            if (action.payload.id === 9) {
                toast.success("Çıkış yapıldı.")
                setTimeout(() => {
                    localStorage.clear()
                    window.location.href = "/login"
                }, 2000);
            }
        }
    }
})

export const { changePage } = routeSlice.actions
export default routeSlice.reducer