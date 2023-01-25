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
    // 1. define margin and dimension
    const margin = { top: 40, right: 20, bottom: 10, left: 70 };
    let chartWidth =
      parseInt(d3.select("#expenseBarChart").style("width")) -
      margin.left -
      margin.right;
    let chartHeight = 350 - margin.top - margin.bottom;
    console.log("barchart width", chartWidth, "barchart height", chartHeight);

    // 2. create SVG
    const svg = d3
      .select(expenseBarChartRef.current)
      .attr("width", chartWidth + margin.left + margin.right)
      .attr("height", chartHeight + margin.top + margin.bottom);

    svg
      .append("rect")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("fill", "white");

    // 3(a). define x axis range (start to end position) and domain (values on axis)
    const x = d3
      .scaleBand()
      .range([margin.left, chartWidth + margin.left])
      .padding(0.3);
    x.domain(testBarChartData.map((data) => data.month));

    // 3(b). define x axis range (start to end position) and domain (values on axis)
    const y = d3.scaleLinear().range([chartHeight, margin.top]);
    y.domain([0, d3.max(testBarChartData, (data) => data.expenseTotal) + 100]);

    // 4(a). create chart title
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

    // 4(b). append x axis - move x axis down to bottom
    svg
      .append("g")
      .attr("transform", `translate(0, ${chartHeight})`)
      .call(d3.axisBottom(x));

    // 4(c). append y axis - move y axis to the left
    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(y));

    // 4(d). append label to x-axis
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

    // add y-label
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

    // 5. add bars to chart
    svg
      .attr("fill", "steelblue")
      .attr("class", "bar")
      .selectAll("rect")
      .filter(".bar")
      .data(testBarChartData)
      .join("rect")
      .attr("x", (data) => x(data.month))
      .attr("width", x.bandwidth())
      .attr("y", (data) => y(data.expenseTotal))
      .attr("height", (data) => y(0) - y(data.expenseTotal));
  });

  return (
    <div id="expenseBarChart" className="h-100">
      <svg ref={expenseBarChartRef}></svg>
    </div>
  );
};

export default BarChart;
