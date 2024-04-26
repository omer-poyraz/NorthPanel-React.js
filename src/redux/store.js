import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import registerSlice from "./slices/registerSlice";
import routeSlice from "./slices/routeSlice";
import usersSlice from "./slices/usersSlice";
import userUpdateSlice from "./slices/userUpdateSlice";
import userDeleteSlice from "./slices/userDeleteSlice";
import userSlice from "./slices/userSlice";
import userChangePassSlice from "./slices/userChangePassSlice";
import appInfosSlice from "./slices/appInfosSlice";
import categoriesSlice from "./slices/categoriesSlice";
import categoryDeleteSlice from "./slices/categoryDeleteSlice";
import editUserSlice from "./slices/editUserSlice";
import addressesSlice from "./slices/addressesSlice";
import addressUpdateSlice from "./slices/addressUpdateSlice";
import basketsSlice from "./slices/basketsSlice";
import categoryUpdateSlice from "./slices/categoryUpdateSlice";

export const Store = configureStore({
    reducer: {
        route: routeSlice,
        login: loginSlice,
        register: registerSlice,
        users: usersSlice,
        user: userSlice,
        userUpdate: userUpdateSlice,
        userDelete: userDeleteSlice,
        userChangePass: userChangePassSlice,
        appInfos: appInfosSlice,
        categories: categoriesSlice,
        categoryDelete: categoryDeleteSlice,
        categoryUpdate: categoryUpdateSlice,
        editUser: editUserSlice,
        addresses: addressesSlice,
        addressUpdate: addressUpdateSlice,
        baskets: basketsSlice,
    }
});