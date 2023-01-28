import LineChart from "./LineChart";

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

//==================== jsonDataNormalisation =====================================//
export const jsonDataNormalisation = (data) => {
  let recordsWithId = [];

  for (let record in data) {
    const { createDate } = data[record];
    let d = new Date(createDate);

    recordsWithId.push({
      id: record,
      ...data[record],
      createMonth: monthNames[d.getMonth()],
      createYear: d.getFullYear(),
    });
  }
  return recordsWithId;
};

//==================== getExpenseByMonth =====================================//
export const getExpenseByMonth = (recordsWithId) => {
  const expenseByMonth = recordsWithId.reduce(
    (expenseByMonth, record) => {
      if (
        expenseByMonth.findIndex(
          (element) => element.month === record.createMonth
        ) === -1
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

//==================== getExpenseByCategory =====================================//
export const getExpenseByCategory = (recordsWithId) => {
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
