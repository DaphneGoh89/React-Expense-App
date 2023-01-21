import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.ul}>
        <h4>Welcome Back</h4>
      </ul>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a href="link">Expense Form</a>
        </li>
        <li className={styles.li}>Dashboard</li>
        <li className={styles.li}>Report</li>
      </ul>
    </nav>
  );
};

export default NavBar;
