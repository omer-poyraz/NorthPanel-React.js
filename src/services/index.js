import axios from "axios"
import api from "../api/api"
import { createAsyncThunk } from "@reduxjs/toolkit"

const id = localStorage.getItem("userId")
const token = localStorage.getItem("token")

export const LoginData = createAsyncThunk("LoginData", async ({ userName, password }) => {
    const result = await axios.post(api.Login, { userName: userName, password: password })
        .then(res => res.data)
    return result
})

export const RegisterData = createAsyncThunk("RegisterData", async ({ firstName, lastName, userName, email, phoneNumber, password }) => {
    const result = await axios.post(api.Register, { firstName: firstName, lastName: lastName, userName: userName, email: email, phoneNumber: phoneNumber, password: password, roles: ["User"] })
        .then(res => res.data)
    return result
})

export const UsersData = createAsyncThunk("UsersData", async ({ page }) => {
    const result = await axios.get(`${api.GelAllUser}?PageNumber=${page}&PageSize=50`, { headers: { "Authorization": `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const UserData = createAsyncThunk("UserData", async () => {
    const result = await axios.get(`${api.GetUser}/${id}`, { headers: { "Authorization": `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const UserUpdateData = createAsyncThunk("UserUpdateData", async ({ userId, firstName, lastName, userName, email, phoneNumber }) => {
    const result = await axios.put(`${api.UpdateUser}/${userId === null ? id : userId}`, { firstName: firstName, lastName: lastName, userName: userName, email: email, phoneNumber: phoneNumber, userId: userId === null ? id : userId }, { headers: { "Authorization": `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const UserDeleteData = createAsyncThunk("UserDeleteData", async ({ id }) => {
    const result = await axios.delete(`${api.DeleteUser}/${id}`, { headers: { "Authorization": `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const UserChangePassData = createAsyncThunk("UserChangePassData", async ({ currentPass, newPass }) => {
    const result = await axios.put(`${api.ChangePass}/${id}`, { currentPassword: currentPass, newPassword: newPass }, { headers: { "Authorization": `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const AppInfosData = createAsyncThunk("AppInfosData", async () => {
    const result = await axios.get(api.GetAllInfo, { headers: { "Authorization": `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const AppInfoUpdateData = createAsyncThunk("AppInfoUpdateData", async ({ id, infoContentId, infoTitle, infoContent }) => {
    const result = await axios.put(`${api.UpdateInfo}/${id}`, { infoContentId: infoContentId, infoTitle: infoTitle, infoContent: infoContent, infoId: id }, { headers: { "Authorization": `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const CategoriesData = createAsyncThunk("CategoriesData", async ({ page }) => {
    const result = await axios.get(`${api.GetAllCategory}?PageNumber=${page}&PageSize=50`, { headers: { "Authorization": `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const CategoryDeleteData = createAsyncThunk("CategoryDeleteData", async ({ id }) => {
    const result = await axios.delete(`${api.DeleteCategory}/${id}`, { headers: { "Authorization": `Bearer ${token}` } })
        .then(res => res.data)
    return result
})