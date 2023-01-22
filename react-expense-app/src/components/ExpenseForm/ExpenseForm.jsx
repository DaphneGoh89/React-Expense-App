import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import Details from "./Details";
import Button from "./Button";

const ExpenseForm = () => {
  const handleExpenseFormSubmit = () => {};
  return (
    <div
      className="col-md-9" /*"container-fluid"*/
      style={{
        // paddingLeft: "50px",
        // paddingRight: "50px",
        paddingTop: "50px",
        margin: "0 auto",
      }}
    >
      <h1 className="mb-5">New Expense Entry</h1>
      <form onSubmit={handleExpenseFormSubmit}>
        <Header />
        <Details />
        <Button />
      </form>
    </div>
  );
};

export default ExpenseForm;
