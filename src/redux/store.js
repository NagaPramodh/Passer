import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Create a userSlice

const store = configureStore({
  reducer: {
    users: userReducer, // Assign userReducer to 'users' state in the store
  },
});

export default store;
