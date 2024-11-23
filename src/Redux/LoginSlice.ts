import { createSlice } from "@reduxjs/toolkit";

interface LoginSlice {
  login: boolean;
}
const initialState: LoginSlice = {
  login: false,
};
export const LoginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {
    Log: (state, action) => {
      state.login = action.payload;
    },
  },
});
export const { Log } = LoginSlice.actions;
export default LoginSlice.reducer;
