import React from "react";
import Filter from "./Filter";
import ExpenseTable from "./ExpenseTable";

const ExpenseReport = () => {
  const handleExpenseReportSubmit = () => {};
  return (
    <div
      className="col-md-9"
      style={{
        paddingTop: "50px",
        margin: "0 auto",
      }}
    >
      <h1 className="mb-5">Expense Report</h1>
      <form onSubmit={handleExpenseReportSubmit} className="mb-5">
        <Filter />
        <button className="btn btn-primary" type="button">
          Submit
        </button>
      </form>
      <ExpenseTable />
    </div>
  );
};

export default ExpenseReport;
