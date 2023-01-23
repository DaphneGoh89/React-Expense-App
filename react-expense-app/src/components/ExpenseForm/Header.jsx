import React, { useState } from "react";

const Header = ({
  accountNo,
  createDate,
  supplier,
  currency,
  amount,
  remarks,
  changeExpenseHeaderData,
}) => {
  return (
    <>
      <div className="form-group mb-3">
        <label htmlFor="accountNo">Account No.</label>
        <select
          className="form-select"
          id="accountNo"
          name="accountNo"
          value={accountNo}
          onChange={changeExpenseHeaderData}
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
          value={createDate}
          onChange={changeExpenseHeaderData}
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
          onChange={changeExpenseHeaderData}
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="currency">Currency</label>
        <input
          className="form-control"
          type="text"
          id="currency"
          name="currency"
          value={currency}
          disabled={true}
          onChange={changeExpenseHeaderData}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="amount">Amount</label>
        <input
          className="form-control"
          type="number"
          id="amount"
          name="amount"
          value={amount}
          onChange={changeExpenseHeaderData}
        />
      </div>

      <div className="form-group mb-5">
        <label htmlFor="remarks">Remarks</label>
        <textarea
          className="form-control"
          type="text"
          id="remarks"
          name="remarks"
          value={remarks}
          rows="3"
          onChange={changeExpenseHeaderData}
        />
      </div>
    </>
  );
};

export default Header;
