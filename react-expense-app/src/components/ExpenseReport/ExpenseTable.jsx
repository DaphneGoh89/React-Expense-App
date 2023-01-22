import React from "react";
import ExpenseTableLine from "./ExpenseTableLine";
import { testExpenseRecords } from "./testExpenseRecords";

const ExpenseTable = () => {
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Supplier</th>
            <th>Remarks</th>
            <th>Amount</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {testExpenseRecords.map((data, i) => {
            return <ExpenseTableLine {...data} key={i} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default ExpenseTable;
