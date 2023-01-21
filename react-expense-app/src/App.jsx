import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";

function App() {
  return (
    <div>
      <NavBar />
      <ExpenseForm />
    </div>
  );
}

export default App;
