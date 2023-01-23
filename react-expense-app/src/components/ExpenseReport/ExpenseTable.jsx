import React from "react";
import ExpenseTableLine from "./ExpenseTableLine";
import { testExpenseRecords } from "./testExpenseRecords";

const ExpenseTable = ({ data }) => {
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Date</th>
            <th>Supplier</th>
            <th>Remarks</th>
            <th>Currency</th>
            <th>Amount</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => {
            return <ExpenseTableLine {...d} key={d.id} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default ExpenseTable;
