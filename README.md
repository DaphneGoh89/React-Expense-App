# React-Expense-App

## React-Expense-App

Record your expenses with the app and track your expenses with the simple dashboard provided.

## Project Description

### Project Objective & Tech Stack

React application with firebase as backend storage. Utilized D3 library for basic charts creation and bootstrap for basic styling.

### Application Setup

1. ExpenseForm page: allows user to enter expense entry. User may add new row/ delete row from the expense entry table. All records will be saved in firebase real-time database after form submission

2. Dashboard: basic dashboard created with D3 library that serves to display summarized data fetched from storage. More work required to include legend and tooltips to display data on hover.

3. ExpenseReport page: allows user to display and delete records based on selected filter criteria.

### Challenges Faced and Key Learnings

1. Firebase setup: took some time to figure out how firebase collections are structured and that the API endpoint for posting and fetching data from firebase should include the collection name.

Example -
When fetching record from the expenseRecord collection, the following URL should be used:
https://react-expense-app-53969-default-rtdb.asia-southeast1.firebasedatabase.app/expenseRecords.json

2. Dashboard creation: most of the time are spent on trying to understand how D3 works and the passing in of summarised expense data for charts creation.

![React-Expense-App-components 001](https://user-images.githubusercontent.com/115914140/215257724-c167f55b-9d3c-4f14-8fc5-370060c32ea2.jpeg)
