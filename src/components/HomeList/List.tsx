import { IExpense } from "../../interfaces/IExpense";

interface IListComponent {
  expense: IExpense;
}
const ListComponent: React.FC<IListComponent> = (props) => {
  return <h1>List</h1>;
};

export default ListComponent;
