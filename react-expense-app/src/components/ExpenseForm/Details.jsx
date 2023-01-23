import React from "react";
import Line from "./Line";
import { AiFillPlusSquare } from "react-icons/ai";
import { IconContext } from "react-icons";

const Details = ({
  expenseTable,
  activeRow,
  changeExpenseDetails,
  addNewRow,
  deleteRow,
}) => {
  const displayRow = () => {
    let content = [];
    for (let i = 0; i < expenseTable.length; i++) {
      content.push(
        <Line
          key={i}
          index={i}
          {...expenseTable[i]}
          activeRow={activeRow}
          changeExpenseDetails={changeExpenseDetails}
          deleteRow={deleteRow}
        />
      );
    }
    return content;
  };

  return (
    <>
      <IconContext.Provider
        value={{
          className: "shared-class",
          size: 18,
        }}
      >
        <table className="table table-hover">
          <thead>
            <tr>
              <th className="text-center" onClick={addNewRow}>
                <AiFillPlusSquare />
              </th>
              <th>Type</th>
              <th colSpan="2">Description</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{displayRow()}</tbody>
        </table>
      </IconContext.Provider>
    </>
  );
};

export default Details;
