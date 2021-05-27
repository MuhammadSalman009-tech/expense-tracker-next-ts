import { List } from "@material-ui/core";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ExpenseItem from "./ExpenseItem";
import IncomeItem from "./IncomeItem";

function ExpensesList() {
  const { expenses, incomes } = useContext(AppContext);
  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseItem expense={expense} key={expense.id} />
      ))}
      {incomes.map((income) => (
        <IncomeItem income={income} key={income.id} />
      ))}
    </div>
  );
}

export default ExpensesList;
