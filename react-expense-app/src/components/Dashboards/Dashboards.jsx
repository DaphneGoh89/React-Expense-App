import React, { useState, useEffect } from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import styles from "./Dashboards.module.css";
import useFetch from "../../customHooks/useFetch";

const Dashboards = () => {
  // fetch data here
  const firebaseURL =
    "https://react-expense-app-53969-default-rtdb.asia-southeast1.firebasedatabase.app/expenseRecords.json";

  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const { getData, data, loading, error } = useFetch();
  const [expenseData, setExpenseData] = useState([]);

  // call getData() when form is submitted
  useEffect(() => {
    getData(firebaseURL, requestOptions);

    // filtered fetched data based on search parameter
    let filteredData = [];
    for (let record in data) {
      let recordWithId = { ...data[record], id: record };
      filteredData.push(recordWithId);
      console.log("filtered", filteredData);
    }
    setExpenseData(filteredData);
    console.log("dashboard", expenseData);

    // process data
    // const groupExpenseByMonth = expenseData.reduce(
    //   (groupedByMonth, expense) => {
    //     let month = expense.createDate.getMonth();
    //     console.log(month);
    //     if (groupedByMonth == null) groupedByMonth = [];
    //     groupedByMonth[month].push(expense);
    //     return groupedByMonth;
    //   },
    //   {}
    // );

    //console.log("expense by month", groupExpenseByMonth);
  }, []);

  return (
    <div className="col-md-9 dashboard" style={{ margin: "0 auto" }}>
      <div className="w-100 h-50 row pt-3">
        <div className="col-md-6">
          <BarChart />
        </div>
        <div className="col-md-6">
          <PieChart />
        </div>
      </div>
      <div className="w-100 h-50">
        <LineChart />
      </div>
    </div>
  );
};

export default Dashboards;
