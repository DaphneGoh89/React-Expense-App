import React, { useState } from "react";
import Filter from "./Filter";
import ExpenseTable from "./ExpenseTable";
import { useEffect } from "react";
import useFetch from "../../customHooks/useFetch";
// TODO: To show "no record found" if no data is retrieved

const currDate = new Date().toISOString().split("T")[0];

const ExpenseReport = () => {
  // getData parameters
  const firebaseURL =
    "https://react-expense-app-53969-default-rtdb.asia-southeast1.firebasedatabase.app/expenseRecords.json";

  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const { getData, data, loading, error } = useFetch();

  // run getData when page loads
  const [createDateFrom, setCreateDateFrom] = useState(currDate);
  const [createDateTo, setCreateDateTo] = useState(currDate);
  const [supplier, setSupplier] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [expenseData, setExpenseData] = useState([]);

  // call getData() when form is submitted
  useEffect(() => {
    getData(firebaseURL, requestOptions);

    // filtered fetched data based on search parameter
    let filteredData = [];
    for (let record in data) {
      let recordWithId = { ...data[record], id: record };

      if (
        recordWithId.supplier.includes(supplier) &&
        recordWithId.createDate >= createDateFrom &&
        recordWithId.createDate <= createDateTo
      ) {
        filteredData.push(recordWithId);
      }
    }
    setHasSubmitted(false);
    setExpenseData(filteredData);
  }, [hasSubmitted]);

  //===========================================================
  // Handle form submission
  //===========================================================
  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true);
  };

  // return component
  return (
    <div
      className="col-md-9"
      style={{
        paddingTop: "50px",
        margin: "0 auto",
      }}
    >
      <h1 className="mb-5">Expense Report</h1>
      <form onSubmit={handleSubmit} className="mb-5">
        <Filter
          createDateFrom={createDateFrom}
          setCreateDateFrom={setCreateDateFrom}
          createDateTo={createDateTo}
          setCreateDateTo={setCreateDateTo}
          supplier={supplier}
          setSupplier={setSupplier}
        />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>

      {/* {loading && <p>Loading.. please wait..</p>}
      {error && <p>Error: Something went wrong..</p>} */}
      <ExpenseTable data={expenseData} />
    </div>
  );
};

export default ExpenseReport;
