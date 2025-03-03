import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { isFirstTime: true }

const authSlice = createSlice({
  name: "auth",
  initialState: initialState ,
  reducers: {
    setFirstTime: (state, action: PayloadAction<boolean>) => {
      state.isFirstTime = action.payload;
    },
    setInitialValues: (
      state,
      action: PayloadAction<{ name: any; value: any }>
    ) => {
      const { name, value } = action.payload;
      //@ts-ignore
      state[name] = value; 
    },
  },
});

export const { setFirstTime } = authSlice.actions;
export default authSlice.reducer;
