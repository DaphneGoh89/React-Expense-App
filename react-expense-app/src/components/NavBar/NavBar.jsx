import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.ul}>
        <h4>Welcome Back</h4>
        <li>
          <input type="text" name="searchMenu"></input>
        </li>
      </ul>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a href="link"></a>Expense Form
        </li>
        <li className={styles.li}>Dashboard</li>
        <li className={styles.li}>Report</li>
      </ul>
    </nav>
  );
};

export default NavBar;
