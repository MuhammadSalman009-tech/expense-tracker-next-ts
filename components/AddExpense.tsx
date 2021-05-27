import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useContext } from "react";
import useStyles from "../styles";
import { useForm } from "react-hook-form";
import { v4 as idV4 } from "uuid";
import { AppContext } from "../context/AppContext";
import { ADD_EXPENSE, ADD_INCOME } from "../ActionTypes";
import styles from "../styles/addExpense.module.css";

function AddExpense() {
  const classes = useStyles();
  const { handleAddExpense,handleAddIncome } = useContext(AppContext);
  //react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const result = {
      id: idV4(),
      name: data.name,
      expenseType: data.expenseType,
      cost: parseInt(data.cost),
    };
    if (data.expenseType == "expense") {
      handleAddExpense(result);
    } else {
      {
        handleAddIncome(result);
      }
    }
  };

  return (
    <div className={classes.formContainer}>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          size="small"
          variant="outlined"
          fullWidth
          label="Name"
          type="text"
          color="primary"
          className={classes.formInput}
          {...register("name", { required: true })}
        />
        {errors.name && (
          <>
            <br />
            <span>Name is required</span>
          </>
        )}
        <TextField
          size="small"
          variant="outlined"
          fullWidth
          label="Cost"
          type="number"
          color="primary"
          className={classes.formInput}
          {...register("cost", { required: true })}
        />
        {errors.cost && (
          <>
            <br />
            <span>Cost is required</span>
            <br />
          </>
        )}
        <select
          name="expenseType"
          id="expenseType"
          className={styles.expenseType}
          {...register("expenseType", { required: true })}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        {errors.expenseType && (
          <>
            <br />
            <span>Cost is required</span>
            <br />
          </>
        )}
        <br />
        <Button
          variant="contained"
          color="primary"
          className={classes.mt10}
          type="submit"
        >
          Add
        </Button>
      </form>
    </div>
  );
}

export default AddExpense;
