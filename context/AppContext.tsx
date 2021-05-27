import React, { createContext, useReducer } from "react";

export interface Expense{
  id:number,
  name:string,
  cost:number,
  expenseType:string
}
export interface Income{
  id:number,
  name:string,
  cost:number,
  expenseType:string
}
export interface AppState{
  expenses:Expense[],
  incomes:Income[]
}
export interface AppContextType{
  expenses:Expense[],
  incomes:Income[],
  handleAddExpense(result:Expense):void
  handleAddIncome(result:Income):void
  handleDeleteExpense(id:number):void
  handleDeleteIncome(id:number):void
}
export enum ActionType{
  ADD_EXPENSE="ADD_EXPENSE",
  ADD_INCOME="ADD_INCOME",
  DELETE_EXPENSE="DELETE_EXPENSE",
  DELETE_INCOME="DELETE_INCOME",
}
export type Action =
  | {
      type: ActionType.ADD_EXPENSE;
      payload: Expense;
    }
  | {
      type: ActionType.DELETE_EXPENSE;
      payload: number;
    }| {
      type: ActionType.ADD_INCOME;
      payload: Income;
    }
  | {
      type: ActionType.DELETE_INCOME;
      payload: number;
    };
const AppReducer = (state:AppState, action:Action) => {
  switch (action.type) {
    case ActionType.ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case ActionType.ADD_INCOME:
      return {
        ...state,
        incomes: [...state.incomes, action.payload],
      };
    case ActionType.DELETE_EXPENSE:
      const expenseId = action.payload;
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== expenseId),
      };
    case ActionType.DELETE_INCOME:
      const incomeId = action.payload;
      return {
        ...state,
        incomes: state.incomes.filter((income) => income.id !== incomeId),
      };
    default:
      return state;
  }
};

const initialState:AppState = {
  expenses: [
    /*{ id: 1, name: "grocery expense", cost: 5550 }*/
  ],
  incomes: [
    /*{ id: 1, name: "grocery expense", cost: 5550 }*/
  ],
};

export const AppContext:React.Context<AppContextType> = createContext(null);
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  function handleAddExpense(result:Expense){
    dispatch({
      type: ActionType.ADD_EXPENSE,
      payload: result,
    });
  }
  function handleAddIncome(result:Income){
    dispatch({
      type: ActionType.ADD_INCOME,
      payload: result,
    });
  }
  function handleDeleteExpense(id:number){
    dispatch({
      type: ActionType.DELETE_EXPENSE,
      payload: id,
    });
  }
  function handleDeleteIncome(id:number){
    dispatch({
      type: ActionType.DELETE_INCOME,
      payload: id,
    });
  }
  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        incomes: state.incomes,
        handleAddExpense,
        handleAddIncome,
        handleDeleteExpense,
        handleDeleteIncome
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
