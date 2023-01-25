import React, { useState, useEffect } from "react";
import Header from "./Header";
import Details from "./Details";
import Button from "./Button";
import database from "../../firebase";
import { ref } from "firebase/database";
import { useLocation } from "react-router-dom";
import useFetch from "../../customHooks/useFetch";
console.log("anything", useFetch);

// TODO: refactor to useReducer
// TODO: validate form
// TODO: show sum at table footer
// TODO: show only 5 empty rows after form submission

const currDate = new Date().toISOString().split("T")[0];
const initExpenseHeaderState = {
  accountNo: "account1",
  createDate: currDate,
  supplier: "",
  currency: "SGD",
  amount: 0,
  remarks: "",
};

const initExpenseTableState = [
  { expenseType: "", description: "", lineTotal: "" },
  { expenseType: "", description: "", lineTotal: "" },
  { expenseType: "", description: "", lineTotal: "" },
  { expenseType: "", description: "", lineTotal: "" },
  { expenseType: "", description: "", lineTotal: "" },
];

const ExpenseUpdateForm = () => {
  //===================================================================
  // Declaring states
  //===================================================================
  const location = useLocation();
  console.log(location.state.id);
  const [isLoading, setIsLoading] = useState(false);
  const [expenseHeaderData, setExpenseHeaderData] = useState(
    initExpenseHeaderState
  );
  const [expenseTable, setExpenseTable] = useState(initExpenseTableState);
  const [activeRow, setActiveRow] = useState(0);
  const [formData, setFormData] = useState(null);

  const { getData, loading, data, error } = useFetch();
  const firebaseURL = `https://react-expense-app-53969-default-rtdb.asia-southeast1.firebasedatabase.app/expenseRecords/${location.state.id}.json`;
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  useEffect(() => {
    const expenseRecordsRef = ref(database, "expenseRecords");
    getData(firebaseURL, requestOptions);
    console.log("data from fetch", data);
  });

  //===================================================================
  // Event handler - <Headers />
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
  const changeExpenseDetails = (e, i, action) => {
    if (action === "reset") {
      let resetExpenseTable = [...expenseTable];
      for (let row = 0; row < resetExpenseTable.length; row++) {
        for (let col in resetExpenseTable[row]) {
          resetExpenseTable[row][col] = "";
        }
      }
      setExpenseTable(resetExpenseTable);
      setActiveRow(0);
    } else {
      setActiveRow(i + 1);
      let updatedExpenseTable = [...expenseTable];
      updatedExpenseTable[i][e.target.name] = e.target.value;
      setExpenseTable(updatedExpenseTable);
    }
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
    getData(firebaseURL, requestOptions);

    // reset form state
    changeExpenseHeaderData(null, "reset");
    changeExpenseDetails(null, null, "reset");
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
      <h1 className="mb-5">Update Expense Entry</h1>
      <p>ID: {location.state.id}</p>
      <form onSubmit={handleExpenseFormSubmit}>
        <Header
          {...expenseHeaderData}
          changeExpenseHeaderData={changeExpenseHeaderData}
        />
        <Details
          expenseTable={expenseTable}
          activeRow={activeRow}
          changeExpenseDetails={changeExpenseDetails}
          addNewRow={addNewRow}
          deleteRow={deleteRow}
        />
        <Button />
      </form>
    </div>
  );
};

export default ExpenseUpdateForm;
