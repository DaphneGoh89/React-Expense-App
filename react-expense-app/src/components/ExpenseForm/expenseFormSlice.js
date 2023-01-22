import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenseData: [],
  amount: 0,
  isLoading: true,
};

export const expenseFormSlice = createSlice({
  name: "expenseForm",
  initialState,
  reducers: {
    addNewExpense: (state, action) => {},
    updateExpense: (state, action) => {},
    deleteExpense: (state, action) => {},
  },
});

// NOTE: There can be multiple actions performed in one slice
export const { addNewExpense, updateExpense, deleteExpense } =
  expenseFormSlice.actions;

// NOTE: There is only ONE reducer function per slice
export default expenseFormSlice.reducer;

// {
//   formType: "new",
//   data: {
//     docNum: 0,
//     accountNo: "",
//     createDate: "",
//     supplier: "",
//     currency: "",
//     amount: "",
//     remarks: "",
//     details: [
//       { rowNum: "", expenseType: "", description: "", lineTotal: "" },
//     ],
//   },
// },
