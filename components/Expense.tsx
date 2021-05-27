import { Card } from "@material-ui/core";
import React, { useContext } from "react";
import useStyles from "../styles";
import { AppContext } from "../context/AppContext";

function Expense() {
  const { expenses } = useContext(AppContext);
  const expenseTotal = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  const classes = useStyles();
  return (
    <Card className={`${classes.card} ${classes.expenseCard}`}>
      Expense: ${expenseTotal}
    </Card>
  );
}

export default Expense;
