import React, { useState, useRef, useEffect } from "react";
import { getExpenseByMonth } from "./getSummary";
import { testBarChartData } from "./testData";

const BarChart = ({ data }) => {
  const expenseBarChartRef = useRef();

  useEffect(() => {
    // margin definition
    const margin = { top: 40, right: 20, bottom: 10, left: 70 };
    let chartWidth =
      parseInt(d3.select("#expenseBarChart").style("width")) -
      margin.left -
      margin.right;
    let chartHeight = 350 - margin.top - margin.bottom;

    // chart dimension
    const svg = d3
      .select(expenseBarChartRef.current)
      .attr("width", chartWidth + margin.left + margin.right)
      .attr("height", chartHeight + margin.top + margin.bottom);

    svg
      .append("rect")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("fill", "white");

    // x-axis
    const x = d3
      .scaleBand()
      .range([margin.left, chartWidth + margin.left])
      .padding(0.3);
    x.domain(data.map((d) => d.month));

    svg
      .append("g")
      .attr("transform", `translate(0, ${chartHeight})`)
      .call(d3.axisBottom(x));

    // y-axis
    const y = d3.scaleLinear().range([chartHeight, margin.top]);
    y.domain([0, d3.max(data, (d) => parseInt(d.expenseTotal)) + 100]);

    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(y));

    // add bars to chart
    svg
      .attr("fill", "steelblue")
      .attr("class", "bar")
      .selectAll("rect")
      .filter(".bar")
      .data(data)
      .join("rect")
      .attr("x", (d) => x(d.month))
      .attr("width", x.bandwidth())
      .attr("y", (d) => y(parseInt(d.expenseTotal)))
      .attr("height", (d) => y(0) - y(parseInt(d.expenseTotal)));

    // chart title
    svg
      .append("text")
      .attr(
        "transform",
        `translate(${(chartWidth + margin.left + margin.right) / 2},40)`
      )
      .attr("text-anchor", "middle")
      .style("font-size", 16)
      .style("fill", "gray")
      .text("Expense Analysis By Period");

    // x-label
    svg
      .append("text")
      .attr(
        "transform",
        `translate(${(chartWidth + margin.left + margin.right) / 2} , ${
          margin.top + chartHeight - margin.bottom / 2
        })`
      )
      .style("text-anchor", "middle")
      .style("font-size", 12)
      .text("Period");

    // y-label
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr(
        "transform",
        "translate(20," +
          (chartHeight + margin.top + margin.bottom) / 2 +
          ")rotate(-90)"
      )
      .style("font-size", 12)
      .text("Expense Amount ($)");
  });

  return (
    <div id="expenseBarChart" className="h-100">
      <svg ref={expenseBarChartRef}></svg>
    </div>
  );
};

export default BarChart;
