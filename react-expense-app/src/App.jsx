import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import Dashboards from "./components/Dashboards/Dashboards";

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      {/* <ExpenseForm /> */}
      <Dashboards />
    </div>
  );
}

export default App;
