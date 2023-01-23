import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import Details from "./Details";
import Button from "./Button";
// TODO: refactor to useReducer

const currDate = new Date().toISOString().split("T")[0];

const ExpenseForm = () => {
  //===================================================================
  // Declaring state and event handler for <Header />
  //===================================================================
  const [expenseHeaderData, setExpenseHeaderData] = useState({
    accountNo: "account1",
    createDate: currDate,
    supplier: "",
    currency: "",
    amount: 0,
    remarks: "",
  });

  const changeExpenseHeaderData = (e) => {
    setExpenseHeaderData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  //===================================================================
  // Declaring state and event handler for <Details />
  //===================================================================

  const [tableRow, setTableRow] = useState([
    { expenseType: "", description: "", lineTotal: 0 },
    { expenseType: "", description: "", lineTotal: 0 },
    { expenseType: "", description: "", lineTotal: 0 },
    { expenseType: "", description: "", lineTotal: 0 },
    { expenseType: "", description: "", lineTotal: 0 },
  ]);

  const changeExpenseDetails = (e, i) => {
    let updatedTableRow = [...tableRow];
    updatedTableRow[i][e.target.name] = e.target.value;
    setTableRow(updatedTableRow);
  };

  const addNewRow = () => {
    setTableRow((prevState) => {
      return [...prevState, { expenseType: "", description: "", lineTotal: 0 }];
    });
  };

  const deleteRow = (e, removedIndex) => {
    setTableRow(tableRow.filter((expenseLine, i) => i !== removedIndex));
  };

  const handleExpenseFormSubmit = () => {};
  return (
    <div
      className="col-md-9"
      style={{
        paddingTop: "50px",
        margin: "0 auto",
      }}
    >
      <h1 className="mb-5">New Expense Entry</h1>
      <form onSubmit={handleExpenseFormSubmit}>
        <Header
          {...expenseHeaderData}
          changeExpenseHeaderData={changeExpenseHeaderData}
        />
        <Details
          tableRow={tableRow}
          changeExpenseDetails={changeExpenseDetails}
          addNewRow={addNewRow}
          deleteRow={deleteRow}
        />
        <Button />
      </form>
    </div>
  );
};

export default ExpenseForm;
