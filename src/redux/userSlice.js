import { createSlice } from "@reduxjs/toolkit";
import { userData } from "../data/userData";
const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [], // Initial state for the list of users
  },
  reducers: {
    addUser: (state, action) => {
      state.list.push(action.payload); // Add user to the list
    },
    deleteUser: (state, action) => {
      state.list = state.list.filter((user) => user.id !== action.payload); // Remove user from the list
    },
    updateUser: (state, action) => {
      state.list = state.list.map((user) =>
        user.id === action.payload.id ? action.payload : user
      ); // Update user in the list
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
