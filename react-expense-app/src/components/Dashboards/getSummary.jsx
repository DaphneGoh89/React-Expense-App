import LineChart from "./LineChart";
import { testExpenseRecordData } from "./testData";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const getExpenseByMonth = (data) => {
  let recordsWithId = [];

  // looping through every key in the object -> get all required information from JSON data.
  for (let record in data) {
    const { amount, createDate } = data[record];
    let d = new Date(createDate);
    let monthName = monthNames[d.getMonth()];

    // information available for processing
    recordsWithId.push({
      id: record,
      amount: amount,
      createDate: createDate,
      createMonth: monthName,
      createYear: d.getFullYear(),
    });
  }

  // summarise expenses by month
  const expenseByMonth = recordsWithId.reduce(
    (expenseByMonth, record) => {
      if (
        expenseByMonth.findIndex(
          (element) => element.month === record.createMonth
        ) === // monthName does not exist in array
        -1
      ) {
        let expenseTotal = record.amount;
        expenseByMonth.push({
          month: record.createMonth,
          expenseTotal: expenseTotal,
        });
      } else {
        let i = expenseByMonth.findIndex(
          (element) => element.month === record.createMonth
        );
        expenseByMonth[i] = {
          ...expenseByMonth[i],
          expenseTotal:
            parseInt(expenseByMonth[i].expenseTotal) + parseInt(record.amount),
        };
      }
      return expenseByMonth;
    },

    []
  );

  return expenseByMonth;
};

//========================================================================================
export const getExpenseByCategory = (data) => {
  let recordsWithId = [];

  // looping through every key in the object -> get all required information from JSON data.
  for (let record in data) {
    const { amount, createDate, details } = data[record];

    let d = new Date(createDate);
    let monthName = monthNames[d.getMonth()];

    // information available for processing
    recordsWithId.push({
      id: record,
      amount: amount,
      details: details,
      createDate: createDate,
      createMonth: monthName,
      createYear: d.getFullYear(),
    });
  }

  // summarise expenses by category
  const expenseByCategory = recordsWithId.reduce(
    (expenseByCategory, record) => {
      for (let line of record.details) {
        if (
          expenseByCategory.findIndex(
            (element) =>
              element.category.toUpperCase() === line.expenseType.toUpperCase()
          ) === -1
        ) {
          let lineTotal = line.lineTotal;
          expenseByCategory.push({
            category: line.expenseType,
            expenseTotal: lineTotal,
          });
        } else {
          let i = expenseByCategory.findIndex(
            (element) =>
              element.category.toUpperCase() === line.expenseType.toUpperCase()
          );
          expenseByCategory[i] = {
            ...expenseByCategory[i],
            expenseTotal:
              parseInt(expenseByCategory[i].expenseTotal) +
              parseInt(line.lineTotal),
          };
        }
      }

      return expenseByCategory;
    },
    []
  );
  return expenseByCategory;
};
