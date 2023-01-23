import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import {
  AiOutlineMenu,
  AiOutlineForm,
  AiOutlineDashboard,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { IconContext } from "react-icons";

const NavBar = () => {
  const [open, setOpen] = useState(true);

  return (
    <IconContext.Provider
      value={{
        className: "shared-class",
        size: 22,
        color: "white",
      }}
    >
      <nav
        className={`${open ? "col-md-2" : "col-md-1"} ${styles.navbar}`}
        style={!open ? { width: "5%" } : {}}
      >
        <ul className={styles.ul}>
          <AiOutlineMenu
            style={!open && { transform: "rotate(90deg)" }}
            onClick={() => setOpen(!open)}
          />
        </ul>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link to="/expenseform">
              <AiOutlineForm />{" "}
              {open && <span className="pl-4">Expense Form</span>}
            </Link>
          </li>
          <li className={styles.li}>
            <Link to="/dashboards">
              <AiOutlineDashboard /> {open && "Dashboard"}
            </Link>
          </li>
          <li className={styles.li}>
            <Link to="/expensereport">
              <AiOutlineUnorderedList /> {open && "Report"}
            </Link>
          </li>
        </ul>
      </nav>
    </IconContext.Provider>
  );
};

export default NavBar;
