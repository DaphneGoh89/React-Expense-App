import React, { useRef, useEffect } from "react";
import { testBarChartData } from "./testData";

const LineChart = ({ data }) => {
  const expenseLineChartRef = useRef();

  useEffect(() => {
    // 1. define margin and dimension
    const margin = { top: 50, right: 20, bottom: 50, left: 70 };
    let chartWidth =
      parseInt(d3.select("#expenseLineChart").style("width")) * 0.9 -
      margin.left -
      margin.right;
    let chartHeight =
      parseInt(d3.select("#expenseLineChart").style("height")) * 0.9 -
      margin.top -
      margin.bottom;

    // 2. create SVG
    const svg = d3
      .select(expenseLineChartRef.current)
      .attr("width", chartWidth + margin.left + margin.right)
      .attr("height", chartHeight + margin.top + margin.bottom)
      .style("background", "white")
      .style("overflow", "visible");

    // 3. create axes
    const x = d3.scalePoint().range([0, chartWidth]);
    x.domain(testBarChartData.map((data) => data.month)); // TODO: to modify to include margin

    svg
      .append("g")
      .attr(
        "transform",
        `translate(${margin.left}, ${chartHeight + margin.top})`
      )
      .call(d3.axisBottom(x));

    const y = d3.scaleLinear().range([chartHeight, 0]);
    y.domain([0, d3.max(testBarChartData, (data) => data.expenseTotal)]);

    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`)
      .call(d3.axisLeft(y));

    // create line
    const generateScaledLine = d3
      .line()
      .x((d) => x(d.month))
      .y((d) => y(d.expenseTotal));

    svg
      .append("g")
      .selectAll("dot")
      .data(testBarChartData)
      .enter()
      .append("circle")
      .attr("cx", (d) => x(d.month))
      .attr("cy", (d) => y(d.expenseTotal))
      .attr("r", 2)
      .attr("transform", `translate(${margin.left}, ${margin.top} )`)
      .style("fill", "#CC0000");

    svg
      .append("path")
      .datum(testBarChartData)
      .attr("class", "line")
      .attr("transform", `translate(${margin.left}, ${margin.top})`)
      .attr("d", generateScaledLine)
      .style("fill", "none")
      .style("stroke", "#CC0000")
      .style("stroke-width", "2");

    // add title
    svg
      .append("text")
      .attr("x", chartWidth / 2 + margin.left)
      .attr("y", margin.top / 2)
      .attr("text-anchor", "middle")
      .style("fill", "gray")
      .style("font-size", 16)
      .text("Trend Analysis");

    // add x-label
    svg
      .append("text")
      .attr("x", chartWidth / 2 + margin.left)
      .attr("y", chartHeight + margin.top + margin.bottom - 15)
      .attr("text-anchor", "middle")
      .style("font-size", 12)
      .text("Period");

    // add y-label
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr(
        "transform",
        `translate(20,
          ${(chartHeight + margin.top + margin.bottom) / 2}
          )rotate(-90)`
      )
      .style("font-size", 12)
      .text("Expense Amount ($)");
  }, [data]);

  return (
    <div id="expenseLineChart" className="h-100">
      <svg ref={expenseLineChartRef}></svg>
    </div>
  );
};

export default LineChart;
