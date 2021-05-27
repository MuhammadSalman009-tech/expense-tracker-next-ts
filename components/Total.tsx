import { Card } from "@material-ui/core";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import useStyles from "../styles";

function Total() {
  const classes = useStyles();
  const { expenses, incomes } = useContext(AppContext);
  const expenseTotal = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  const incomeTotal = incomes.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  const alertType =
    incomeTotal >= expenseTotal ? "card-success" : "card-danger";

  return (
    <Card className={`${classes.card} ${alertType}`}>
      Total: ${incomeTotal - expenseTotal}
    </Card>
  );
}

export default Total;
