import React from "react";

const Line = ({
  index,
  expenseType,
  description,
  lineTotal,
  changeExpenseDetails,
  deleteRow,
}) => {
  return (
    <tr key={index}>
      <th></th>
      <th scope="row">{index + 1}</th>
      <td>
        <input
          className="form-control"
          type="text"
          id="expenseType"
          name="expenseType"
          value={expenseType}
          onChange={(e) => changeExpenseDetails(e, index)}
        ></input>
      </td>
      <td colSpan="2">
        <input
          className="form-control"
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={(e) => changeExpenseDetails(e, index)}
        ></input>
      </td>
      <td>
        <input
          className="form-control"
          type="text"
          id="lineTotal"
          name="lineTotal"
          value={lineTotal}
          onChange={(e) => changeExpenseDetails(e, index)}
        ></input>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger float-right"
          onClick={(e) => deleteRow(e, index)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Line;
