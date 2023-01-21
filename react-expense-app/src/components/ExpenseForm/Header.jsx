import React, { useState } from "react";

const Header = () => {
  // this can be moved to redux or to app.jsx
  const [header, setHeader] = useState({
    accountNo: "",
    createDate: "",
    supplier: "",
    currency: "",
    amount: "",
    remarks: "",
  });

  const handleInputChange = (e) => {};
  return (
    <>
      <div className="form-group mb-3">
        <label htmlFor="accountNo">Account No.</label>
        <select
          className="form-select"
          id="accountNo"
          name="accountNo"
          onChange={handleInputChange}
        >
          <option value="account1">Account 1</option>
          <option value="account2">Account 2</option>
        </select>
      </div>
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

      <div className="form-group mb-3">
        <label htmlFor="currency">Currency</label>
        <input
          className="form-control"
          type="text"
          id="currency"
          name="currency"
          value=""
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="amount">Amount</label>
        <input
          className="form-control"
          type="number"
          id="amount"
          name="amount"
          value=""
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group mb-5">
        <label htmlFor="remarks">Remarks</label>
        <textarea
          className="form-control"
          type="text"
          id="remarks"
          name="remarks"
          value=""
          rows="3"
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default Header;
