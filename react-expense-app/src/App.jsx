import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import Dashboards from "./components/Dashboards/Dashboards";
import ExpenseReport from "./components/ExpenseReport/ExpenseReport";

function App() {
  return (
    <div className="container-fluid" /*"wrapper"*/>
      <div className="row">
        <NavBar />
        {/* <ExpenseForm /> */}
        <Routes>
          <Route path="/" element={<Navigate replace to="/expenseform" />} />
          <Route path="/expenseform" element={<ExpenseForm />} />
          <Route path="/dashboards" element={<Dashboards />} />
          <Route path="/expensereport" element={<ExpenseReport />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
