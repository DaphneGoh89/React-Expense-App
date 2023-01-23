import React from "react";

const Filter = ({
  createDateFrom,
  setCreateDateFrom,
  createDateTo,
  setCreateDateTo,
  supplier,
  setSupplier,
}) => {
  return (
    <>
      <div className="form-group mb-3">
        <label htmlFor="createDateFrom">Date From</label>
        <input
          className="form-control"
          type="date"
          id="createDateFrom"
          name="createDateFrom"
          value={createDateFrom}
          onChange={(e) => setCreateDateFrom(e.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="createDateTo">Date To</label>
        <input
          className="form-control"
          type="date"
          id="createDateTo"
          name="createDateTo"
          value={createDateTo}
          onChange={(e) => setCreateDateTo(e.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="supplier">Supplier</label>
        <input
          className="form-control"
          type="text"
          id="supplier"
          name="supplier"
          value={supplier}
          onChange={(e) => setSupplier(e.target.value)}
        />
      </div>
    </>
  );
};

export default Filter;
