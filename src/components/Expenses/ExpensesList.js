import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  // let expenseData = <h2>No Expense Founds.</h2>;
  if (props.selectedYearFilter.length === 0) {
    return <h2 className="expenses-list__fallback ">No Expenses Founds.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.selectedYearFilter.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
