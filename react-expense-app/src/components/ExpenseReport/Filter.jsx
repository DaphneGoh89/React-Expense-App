import React from "react";

const Filter = () => {
  const handleInputChange = () => {};

  return (
    <>
      <div className="form-group mb-3">
        <label htmlFor="createDate">Date</label>
        <input
          className="form-control"
          type="date"
          id="createDate"
          name="createDate"
          value=""
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="supplier">Supplier</label>
        <input
          className="form-control"
          type="text"
          id="supplier"
          name="supplier"
          value=""
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default Filter;
