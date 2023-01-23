import React from "react";

const ExpenseTableLine = ({
  createDate,
  supplier,
  remarks,
  currency,
  amount,
}) => {
  return (
    <>
      <tr>
        <td>{createDate}</td>
        <td>{supplier}</td>
        <td>{remarks}</td>
        <td>{currency}</td>
        <td>{amount}</td>
        <td className="float-right">
          <button className="btn btn-warning float-right" type="button">
            Update
          </button>
        </td>
        <td>
          <button className="btn btn-danger" type="button">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default ExpenseTableLine;
