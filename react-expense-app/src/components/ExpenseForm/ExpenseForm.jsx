import React from "react";
import Header from "./Header";
import Details from "./Details";
import Button from "./Button";

const ExpenseForm = () => {
  const handleExpenseFormSubmit = () => {};
  return (
    <div
      style={{
        paddingLeft: "50px",
        paddingRight: "50px",
        paddingTop: "50px",
      }}
    >
      <h1>New Expense Entry</h1>
      <form onSubmit={handleExpenseFormSubmit}>
        <Header />
        <Details />
        <Button />
      </form>
    </div>
  );
};

export default ExpenseForm;
