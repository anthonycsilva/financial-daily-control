import { createContext, useState } from "react";
import { IExpense } from "../interfaces/IExpense";

interface IExpensesContext {
  addExpense: (expense: IExpense) => void;
  removeExpense: (expense: IExpense) => void;
  expenses: IExpense[];
}

interface IExpenseProviderProps {
  children?: React.ReactNode;
}

const ExpensesContext = createContext<IExpensesContext>({} as IExpensesContext);

export const ExpensesProvider: React.FC<IExpenseProviderProps> = (props) => {
  const [expenses, setExpenses] = useState<IExpense[]>([]);
  const handleAddExpense = (expense: IExpense) => {};
  const handleRemoveExpense = (expense: IExpense) => {};

  const contextValue: IExpensesContext = {
    addExpense: handleAddExpense,
    removeExpense: handleRemoveExpense,
    expenses: expenses,
  };
  return (
    <ExpensesContext.Provider value={contextValue}>
      {props.children}
    </ExpensesContext.Provider>
  );
};
