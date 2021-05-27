import { Card } from "@material-ui/core";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import useStyles from "../styles";

function Income() {
  const classes = useStyles();
  const { incomes } = useContext(AppContext);
  const incomeTotal = incomes.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  return (
    <Card className={`${classes.card} ${classes.incomeCard}`}>
      Income: ${incomeTotal}
    </Card>
  );
}

export default Income;
