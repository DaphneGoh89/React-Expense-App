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

export const getExpenseByMonth = (fetchedData) => {
  let recordsWithId = [];

  // looping through every key in the object -> get all required information from JSON data.
  for (let record in /*testExpenseRecordData*/ fetchedData) {
    const { amount, createDate } = fetchedData[record];
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

  //console.log("get summary - expenseByMonth", expenseByMonth);
};

export const getExpenseByCategory = () => {};
