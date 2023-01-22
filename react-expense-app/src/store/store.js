import { configureStore } from "@reduxjs/toolkit";
import expenseFormSlice from "../components/ExpenseForm/expenseFormSlice";

export default configureStore({ reducer: { expenseForm: expenseFormReducer } });
