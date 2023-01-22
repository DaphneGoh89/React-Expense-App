import { configureStore } from "@reduxjs/toolkit";
import expenseFormReducer from "../components/ExpenseForm/expenseFormSlice";

export default configureStore({ reducer: { expenseForm: expenseFormReducer } });
