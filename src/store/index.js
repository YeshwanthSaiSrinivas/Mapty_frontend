import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  id: "",
  username: "",
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.id = action.payload.id;
      state.username = action.payload.username;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.id = "";
      state.username = "";
    },
  },
});

export const store = configureStore({
  reducer: authSlice.reducer,
});

export const authActions = authSlice.actions;
