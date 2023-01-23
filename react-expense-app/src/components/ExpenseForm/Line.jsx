import React from "react";

const Line = ({
  index,
  expenseType,
  description,
  lineTotal,
  activeRow,
  changeExpenseDetails,
  deleteRow,
}) => {
  return (
    <tr key={index}>
      <th scope="row" className="text-center">
        {index + 1}
      </th>
      <td>
        <input
          className="form-control"
          type="text"
          id="expenseType"
          name="expenseType"
          disabled={index <= activeRow ? false : true}
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
          disabled={index <= activeRow ? false : true}
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
          disabled={index <= activeRow ? false : true}
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
