//import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const userChoosenyear = (data) => {
    //console.log(data.year);
    //var selectedYearFor = data.year;
    setSelectedYear(data.year);
  };

  const selectedYearFilter = props.items.filter((el) => {
    return el.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onChoosenYear={userChoosenyear} />
      <ExpensesChart expenses={selectedYearFilter} />
      <ExpensesList selectedYearFilter={selectedYearFilter} />
    </Card>
  );
};

export default Expenses;
