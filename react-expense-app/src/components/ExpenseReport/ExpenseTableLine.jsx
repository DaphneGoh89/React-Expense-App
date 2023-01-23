import React, { useState, useEffect } from "react";

const ExpenseTableLine = ({
  id,
  createDate,
  supplier,
  remarks,
  currency,
  amount,
}) => {
  const [error, setError] = useState(null);
  const [confirmDeletion, setConfirmDeletion] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  let baseURL =
    "https://react-expense-app-53969-default-rtdb.asia-southeast1.firebasedatabase.app/expenseRecords/";

  //===========================================================================
  // Handle Deletion
  //===========================================================================
  useEffect(() => {
    const controller = new AbortController();
    fetchData(`${baseURL}/${idToDelete}.json`, controller.signal);
    setIdToDelete(null);

    return () => {
      controller.abort();
    };
  }, [idToDelete]);

  // TODO: refactor here
  const fetchData = async (url) => {
    // setLoading = true;
    setError(null);

    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    try {
      const response = await fetch(url, requestOptions);
      const result = await response.json();
    } catch (error) {
      if (error.name !== "AbortError") {
        setError(error.message);
      }
    }
    // setLoading(false);
  };

  const handleDeletion = () => {
    setIdToDelete(id);
    console.log("todelete", id);
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
          <button className="btn btn-warning float-right" type="button">
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
