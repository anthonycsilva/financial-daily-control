import { IExpense } from "../interfaces/IExpense";
import {create} from 'zustand'
import {persist} from 'zustand/middleware'

interface IExpensesContext {
  addExpense: (expense: IExpense) => void;
  removeExpense: (name:string) => void;
  expenses: IExpense[];
}

export const useExpenses = create<IExpensesContext>()(persist((set,get) =>({
  expenses: [],
  addExpense(expense) {
      set(state => ({...state, expenses: [...state.expenses, expense]}))
  },
  removeExpense(name) {
    const expensesOnStore = get().expenses
    
    const updateExpenses = expensesOnStore.filter(exp => exp.name === name)

    set(state =>({...state, expenses: updateExpenses}))
    
  },  
}),{name:'@expenses'}))