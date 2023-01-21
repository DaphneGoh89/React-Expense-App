import React from "react";

const Line = ({ index }) => {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>
        <input
          className="form-control"
          type="text"
          id="expenseType"
          name="expenseType"
        ></input>
      </td>
      <td colSpan="2">
        <input
          className="form-control"
          type="text"
          id="description"
          name="description"
        ></input>
      </td>
      <td>
        <input
          className="form-control"
          type="text"
          id="lineTotal"
          name="lineTotal"
        ></input>
      </td>
    </tr>
  );
};

export default Line;
