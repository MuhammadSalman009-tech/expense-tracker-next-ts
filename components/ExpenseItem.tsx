import { Card, Divider, ListItem } from "@material-ui/core";
import React, { useContext } from "react";
import useStyles from "../styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { AppContext } from "../context/AppContext";
import { DELETE_EXPENSE } from "../ActionTypes";

function ExpenseItem({ expense }) {
  const classes = useStyles();
  const { handleDeleteExpense } = useContext(AppContext);
  return (
    <>
      <Card
        className={`${classes.listItem} ${classes.expenseCard} ${classes.card}`}
      >
        {expense.name}
        <div>
          <span className={classes.priceBadge}>
            ${expense.cost}
            {/* <Badge color="primary" badgeContent={expense.cost} /> */}
          </span>
          <span>{expense.expenseType.toUpperCase()}</span>
          <span>
            <DeleteIcon
              onClick={() => {
                handleDeleteExpense(expense.id)
              }}
            />
          </span>
        </div>
      </Card>
    </>
  );
}

export default ExpenseItem;
