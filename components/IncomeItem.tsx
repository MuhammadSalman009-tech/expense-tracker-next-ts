import { Card, Divider, ListItem } from "@material-ui/core";
import React, { useContext } from "react";
import useStyles from "../styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { AppContext } from "../context/AppContext";
import { DELETE_EXPENSE, DELETE_INCOME } from "../ActionTypes";

function IncomeItem({ income }) {
  const classes = useStyles();
  const { handleDeleteIncome } = useContext(AppContext);
  return (
    <>
      <Card
        className={`${classes.listItem} ${classes.incomeCard} ${classes.card}`}
      >
        {income.name}
        <div>
          <span className={classes.priceBadge}>
            ${income.cost}
            {/* <Badge color="primary" badgeContent={expense.cost} /> */}
          </span>
          <span>{income.expenseType.toUpperCase()}</span>
          <span>
            <DeleteIcon
              onClick={() => {
                handleDeleteIncome(income.id)
              }}
            />
          </span>
        </div>
      </Card>
    </>
  );
}

export default IncomeItem;
