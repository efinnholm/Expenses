import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";

export default function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const getFilterYear = (yearData) => {
    setSelectedYear(yearData);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onGetFilterYear={getFilterYear}
        />
        {filteredExpenses === 0 && { expensesContent }}
        {filteredExpenses.length < 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>
    </div>
  );
}
