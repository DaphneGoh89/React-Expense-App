import React from "react";
import Line from "./Line";

const Details = () => {
  let rowNum = 5;

  const displayRow = (rowNum) => {
    let content = [];
    for (let i = 0; i < rowNum; i++) {
      content.push(<Line key={i} index={i} />);
    }
    return content;
  };

  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Type</th>
            <th colSpan="2">Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>{displayRow(rowNum)}</tbody>
      </table>
    </>
  );
};

export default Details;
