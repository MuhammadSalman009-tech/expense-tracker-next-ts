import { Container, Divider, Grid } from "@material-ui/core";
import Total from "./Total";
import Expense from "./Expense";
import ExpensesList from "./ExpensesList";
import AddExpense from "./AddExpense";
import Income from "./Income";
import { AppProvider } from "../context/AppContext";
import useStyles from "../styles";
// import { useState } from "react";
function App() {
  const classes = useStyles();
  return (
    <AppProvider>
      <Container className={classes.container}>
        <h3>My budget planner</h3>
        <Grid container spacing={3}>
          <Grid item sm>
            <Income />
          </Grid>
          <Grid item sm>
            <Expense />
          </Grid>
          <Grid item sm>
            <Total />
          </Grid>
        </Grid>
        <h3>Add Expense</h3>
        <Grid container spacing={3}>
          <Grid item xs>
            <AddExpense />
          </Grid>
        </Grid>{" "}
        <br />
        <Divider />
        <h3>Expenses</h3>
        <Grid container spacing={3}>
          <Grid item xs>
            <ExpensesList />
          </Grid>
        </Grid>
      </Container>
    </AppProvider>
  );
}

export default App;
