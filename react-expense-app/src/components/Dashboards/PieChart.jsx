import React, { useRef, useEffect } from "react";
import { testPieChartData } from "./testData";

const PieChart = ({ data }) => {
  const expensePieChartRef = useRef();
  const colors = [
    "#27acaa",
    "#42c9c2",
    "#60e6e1",
    "#93f0e6",
    "#87d3f2",
    "#4ebeeb",
    "#35a4e8",
    "#188ce5",
    "#542ea5",
    "#724bc3",
    "#9c82d4",
    "#c981b2",
    "#b14891",
    "#ff6d00",
    "#ff810a",
    "#ff9831",
    "#ffb46a",
    "#ff9a91",
    "#ff736a",
    "#f95d54",
    "#ff4136",
    "#c4c4cd",
    "#8ce8ad",
    "#57e188",
    "#34c768",
    "#2db757",
  ];

  useEffect(() => {
    const margin = { top: 40, right: 50, bottom: 10, left: 50 };
    let chartWidth = 350 - margin.left - margin.right;
    let chartHeight = 350 - margin.top - margin.bottom;

    let outerRadius = (chartWidth - 50) / 2;
    let innerRadius = 50;
    let arc = d3.arc().outerRadius(outerRadius).innerRadius(innerRadius);

    // create SVG
    let svg = d3
      .select(expensePieChartRef.current)
      .attr("width", chartWidth + margin.left + margin.right)
      .attr("height", chartHeight + margin.top + margin.bottom)
      .style("background", "white")
      // .attr(
      //   "viewBox",
      //   `0 0 ${chartWidth + margin.left + margin.right} ${
      //     chartWidth + margin.left + margin.right
      //   }`
      // )
      .append("g")
      .attr(
        "transform",
        `translate(${chartWidth / 2 + margin.left}, ${
          chartHeight / 2 + margin.top
        })`
      );

    const pie = d3
      .pie()
      .value((data) => data.expenseTotal)
      .sort(null)
      .padAngle(0.03);

    let data_ready = pie(testPieChartData);

    // donut partition
    svg
      .selectAll("whatever")
      .data(data_ready)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => colors[d.index])
      .attr("stroke", "#fff")
      .style("stroke-width", "2")
      .style("opacity", "0.8");

    // add title
    svg
      .append("text")
      .attr("transform", `translate(0, ${-chartHeight / 2})`)
      .attr("text-anchor", "middle")
      .style("fill", "gray")
      .style("font-size", 16)
      .text("Expense Category Analysis");
  }, [data]);

  return (
    <div id="expensePieChart" className="h-100">
      <svg ref={expensePieChartRef}></svg>
    </div>
  );
};

export default PieChart;
