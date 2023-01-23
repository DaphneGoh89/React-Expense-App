import React from "react";
import Line from "./Line";
import { AiOutlinePlus } from "react-icons/ai";

const Details = ({ tableRow, changeExpenseDetails, addNewRow, deleteRow }) => {
  const displayRow = () => {
    let content = [];
    for (let i = 0; i < tableRow.length; i++) {
      content.push(
        <Line
          key={i}
          index={i}
          {...tableRow[i]}
          changeExpenseDetails={changeExpenseDetails}
          deleteRow={deleteRow}
        />
      );
    }
    return content;
  };

  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th className="text-center" onClick={addNewRow}>
              <AiOutlinePlus />
            </th>
            <th>#</th>
            <th>Type</th>
            <th colSpan="2">Description</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{displayRow()}</tbody>
      </table>
    </>
  );
};

export default Details;
