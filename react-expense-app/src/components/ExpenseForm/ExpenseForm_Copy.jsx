import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import Details from "./Details";
import Button from "./Button";
import database from "../../firebase";
import { ref } from "firebase/database";
import { useEffect } from "react";

// TODO: refactor to useReducer
// TODO: validate form
// TODO: show sum at table footer
// TODO: clear all table input after submission

// Initial states
const currDate = new Date().toISOString().split("T")[0];
const initExpenseHeaderState = {
  accountNo: "account1",
  createDate: currDate,
  supplier: "",
  currency: "SGD",
  amount: 0,
  remarks: "",
};

const initRowState = {
  expenseType: "",
  description: "",
  lineTotal: "",
};
const initExpenseTableState = [
  { expenseType: "", description: "", lineTotal: "" },
  { expenseType: "", description: "", lineTotal: "" },
  { expenseType: "", description: "", lineTotal: "" },
  { expenseType: "", description: "", lineTotal: "" },
  { expenseType: "", description: "", lineTotal: "" },
];

const ExpenseForm = () => {
  //===================================================================
  // Declaring states
  //===================================================================
  const [isLoading, setIsLoading] = useState(false);
  const [expenseHeaderData, setExpenseHeaderData] = useState(
    initExpenseHeaderState
  );
  const [expenseTable, setExpenseTable] = useState(initExpenseTableState);
  const [rowNum, setRowNum] = useState(5); // new
  const [rowState, setRowState] = useState(initRowState); // new
  const [activeRow, setActiveRow] = useState(0);
  const [formData, setFormData] = useState(null);

  //===================================================================
  // Event handler - <Headers /> - OKAY
  //===================================================================
  const changeExpenseHeaderData = (e, action) => {
    if (action === "reset") {
      setExpenseHeaderData(initExpenseHeaderState);
    } else {
      setExpenseHeaderData((prevState) => {
        return { ...prevState, [e.target.name]: e.target.value };
      });
    }
  };

  //===================================================================
  // Event handlers - <Details />
  //===================================================================
  const changeExpenseDetails = (e, i) => {
    setActiveRow(i + 1);
    let updatedExpenseTable = [...expenseTable];
    updatedExpenseTable[i][e.target.name] = e.target.value;
    setExpenseTable(updatedExpenseTable);
  };

  const addNewRow = () => {
    setExpenseTable((prevState) => {
      return [
        ...prevState,
        { expenseType: "", description: "", lineTotal: "" },
      ];
    });
  };

  const deleteRow = (e, removedIndex) => {
    setExpenseTable(
      expenseTable.filter((expenseLine, i) => i !== removedIndex)
    );
  };

  //===================================================================
  // Handle form submmission
  //===================================================================
  useEffect(() => {
    const expenseRecordsRef = ref(database, "expenseRecords");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    fetch(
      "https://react-expense-app-53969-default-rtdb.asia-southeast1.firebasedatabase.app/expenseRecords.json",
      requestOptions
    )
      .then((response) => setIsLoading(true))
      .then((data) => {
        setIsLoading(false);
        console.log(data);
      });
    // reset form state
    changeExpenseHeaderData(null, "reset");
    //changeExpenseDetails(null, null, "reset");
  }, [formData]);

  const handleExpenseFormSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...expenseHeaderData, details: expenseTable });
  };
  //===================================================================
  // Display expenseForm
  //===================================================================
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
          expenseTable={expenseTable}
          activeRow={activeRow}
          rowNum={rowNum}
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
