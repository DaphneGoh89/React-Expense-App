import React, { useState, useEffect } from "react";
import useFetch from "../../customHooks/useFetch";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import { getExpenseByMonth, getExpenseByCategory } from "./getSummary";

const Dashboards = () => {
  getExpenseByCategory();
  const firebaseURL =
    "https://react-expense-app-53969-default-rtdb.asia-southeast1.firebasedatabase.app/expenseRecords.json";

  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const { getData, data, loading, error } = useFetch();
  const [expenseRecords, setExpenseRecords] = useState([]);
  const [expenseSummaryByMonth, setExpenseSummaryByMonth] = useState([]);
  const [expenseSummaryByCategory, setExpenseSummaryByCategory] = useState([]);

  useEffect(() => {
    getData(firebaseURL, requestOptions);
  }, []);

  useEffect(() => {
    setExpenseRecords(data);
  }, [data]);

  useEffect(() => {
    let summaryByMonth = getExpenseByMonth(expenseRecords);
    let summaryByCategory = getExpenseByCategory(expenseRecords);
    setExpenseSummaryByMonth(summaryByMonth);
    setExpenseSummaryByCategory(summaryByCategory);
  }, [expenseRecords]);

  return (
    <div className="col-md-9 dashboard" style={{ margin: "0 auto" }}>
      <div className="w-100 h-50 row pt-3">
        {expenseSummaryByMonth.length > 0 && (
          <div className="col-md-6">
            <BarChart data={expenseSummaryByMonth} />
          </div>
        )}
        {expenseSummaryByCategory.length > 0 && (
          <div className="col-md-6">
            <PieChart data={expenseSummaryByCategory} />
          </div>
        )}
      </div>
      {expenseSummaryByMonth.length > 0 && (
        <div className="w-100 h-50">
          <LineChart data={expenseSummaryByMonth} />
        </div>
      )}
    </div>
  );
};

export default Dashboards;
