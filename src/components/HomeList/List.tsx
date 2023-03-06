import { useEffect } from "react";
import { IExpense } from "../../interfaces/IExpense";
import { useExpenses } from "../../store/useExpenses";

interface IListComponent {
  expense: IExpense;
}
const ListComponent: React.FC<IListComponent> = (props) => {
  const { addExpense, expenses, removeExpense } = useExpenses((state) => state);
  const mock: IExpense = {
    name: "Monitor",
    description: "Monitor muito pika, foda pra caralho",
    price: 3500,
    purchaseDate: new Date(),
  };
  useEffect(() => addExpense(mock), []);
  return <h1>{JSON.stringify(expenses, null, 2)}</h1>;
};

export default ListComponent;
