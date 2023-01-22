import React from "react";
import BarChart from "./BarChart";
import styles from "./Dashboards.module.css";

const Dashboards = () => {
  return (
    <div className={`col-md-4 mt-5 ml-1`}>
      <BarChart />
    </div>
  );
};

export default Dashboards;
