import React, { useState } from "react";
import Filter from "./Filter";
import ExpenseTable from "./ExpenseTable";
import { useEffect } from "react";

const currDate = new Date().toISOString().split("T")[0];

const ExpenseReport = () => {
  const [createDateFrom, setCreateDateFrom] = useState(currDate);
  const [createDateTo, setCreateDateTo] = useState(currDate);
  const [supplier, setSupplier] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const firebaseURL =
    "https://react-expense-app-53969-default-rtdb.asia-southeast1.firebasedatabase.app/expenseRecords.json";

  //===========================================================
  // TODO: call fetch API to get data from Firebase - DONE
  //===========================================================
  useEffect(() => {
    const controller = new AbortController();
    fetchData(firebaseURL, controller.signal);
    setHasSubmitted(false);

    return () => {
      controller.abort();
    };
  }, [hasSubmitted]);

  //===========================================================
  // TODO: async call API function - DONE
  //===========================================================
  const fetchData = async (url) => {
    // setLoading = true;
    setError(null);
    setData(null);
    let filteredData = [];

    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    try {
      const response = await fetch(url, requestOptions);
      const result = await response.json();
      for (let record in result) {
        let matchedRecord = { ...result[record], id: record };
        // state your condition here
        if (matchedRecord.supplier.includes(supplier)) {
          filteredData.push(matchedRecord);
        }
      }
      setData(filteredData);
    } catch (error) {
      if (error.name !== "AbortError") {
        setError(error.message);
      }
    }
    // setLoading(false);
  };

  //===========================================================
  // Handle form submission
  //===========================================================
  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true);
  };
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
      {data && <ExpenseTable data={data} />}
    </div>
  );
};

export default ExpenseReport;
