import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setApiAccessToken } from "../../api/axios";

const initialState :any = { 
  isFirstTime: true , 
  isLoggedIn: false , 
  accessToken: null ,
  loader: false
 }

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setFirstTime: (state, action: PayloadAction<boolean>) => {
      state.isFirstTime = action.payload;
    },
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      let accessToken = action.payload;
      setApiAccessToken(accessToken); // Why? : Sets accessToken in Api Headers and avoid cycle: src/redux/store.ts -> src/api/module/profileThunk.ts -> src/api/api.ts -> src/redux/store.ts
      state.accessToken = accessToken;
    },
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.loader = action?.payload;
    },
  },
});

export const { setFirstTime, setLoggedIn, setAccessToken, setLoader } = authSlice.actions;
export default authSlice.reducer;
