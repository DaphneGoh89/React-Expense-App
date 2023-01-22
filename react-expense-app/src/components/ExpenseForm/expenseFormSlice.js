import { createSlice } from "@reduxjs/toolkit";

export const expenseFormSlice = createSlice({
  name: "expenseForm",
  initialState: {},
  reducers: {},
});

// NOTE: There can be multiple actions performed in one slice
export const {} = expenseFormSlice.actions;

// NOTE: There is only ONE reducer function per slice
export default expenseFormSlice.reducer;
