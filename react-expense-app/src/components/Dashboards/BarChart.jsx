import React, { useState, useRef, useEffect } from "react";
import { testBarChartData } from "./testData";

// TODO :-
// 1. Add chart title
// 2. Add axis label
// 3. Add filter
// 4. Show expense by category

const BarChart = () => {
  const expenseBarChartRef = useRef();

  useEffect(() => {
    // define margin and dimension
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    let chartWidth =
      parseInt(d3.select("#expenseBarChart").style("width")) -
      margin.left -
      margin.right;
    let chartHeight = 400 - margin.top - margin.bottom;

    // define x and y axis ranges: start value --> end value
    // define x and y domain (i.e. value range)
    const x = d3
      .scaleBand()
      .range([margin.left, chartWidth + margin.left])
      .padding(0.3);
    x.domain(testBarChartData.map((data) => data.month));

    const y = d3.scaleLinear().range([chartHeight, margin.top]);
    y.domain([0, d3.max(testBarChartData, (data) => data.expenseTotal)]);

    // define width and height of chart area
    const svg = d3
      .select(expenseBarChartRef.current)
      .attr("width", chartWidth + margin.left + margin.right)
      .attr("height", chartHeight + margin.top + margin.bottom);

    // append x axis - move x axis down to bottom
    svg
      .append("g")
      .attr("transform", `translate(0, ${chartHeight})`)
      .call(d3.axisBottom(x));

    // append y axis - move y axis to the left
    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(y));

    // add bars to chart
    svg
      .attr("fill", "steelblue")
      .selectAll("rect")
      .data(testBarChartData)
      .join("rect")
      .attr("x", (data) => x(data.month))
      .attr("width", x.bandwidth())
      .attr("y", (data) => y(data.expenseTotal))
      .attr("height", (data) => y(0) - y(data.expenseTotal));
  });

  return (
    <div id="expenseBarChart" className="col-md-12">
      <svg ref={expenseBarChartRef}></svg>
    </div>
  );
};

export default BarChart;
