import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../customHooks/useFetch";

const ExpenseTableLine = ({
  id,
  createDate,
  supplier,
  remarks,
  currency,
  amount,
}) => {
  const navigate = useNavigate();
  const { getData, loading, data, error } = useFetch();
  const [confirmDeletion, setConfirmDeletion] = useState(false); // can keep for later (use modal to give warning before deletion)
  const [idToDelete, setIdToDelete] = useState(null);
  let baseURL =
    "https://react-expense-app-53969-default-rtdb.asia-southeast1.firebasedatabase.app/expenseRecords/";
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };

  //===========================================================================
  // Handle Deletion
  //===========================================================================
  useEffect(() => {
    const controller = new AbortController();
    getData(`${baseURL}/${idToDelete}.json`, requestOptions);
    setIdToDelete(null);

    return () => {
      controller.abort();
    };
  }, [idToDelete]);

  // delete onClick event listener
  const handleDeletion = () => {
    setIdToDelete(id);
  };

  return (
    <>
      <tr>
        <td>{createDate}</td>
        <td>{supplier}</td>
        <td>{remarks}</td>
        <td>{currency}</td>
        <td>{amount}</td>
        <td className="float-right">
          <button
            className="btn btn-warning float-right"
            type="button"
            onClick={() =>
              navigate("/expenseform", { state: { id: id, action: "update" } })
            }
          >
            Update
          </button>
        </td>
        <td>
          <button
            className="btn btn-danger"
            type="button"
            onClick={handleDeletion}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default ExpenseTableLine;
