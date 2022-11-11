import React, { useState } from "react";
import "./ExpenseForm.css";
// import AddNewExpense from "./AddNewExpense";
// import ExpenseFormContent from "./ExpenseFormContent";

const ExpenseForm = (props) => {
  const [enterdTitle, setEnterdTitle] = useState("");
  const [enterdAmount, setEnterdAmount] = useState("");
  const [enterdDate, setEnterdDate] = useState("");
  //  const [inputForm,setInputForm] = useState(false);
  // const [userData, setUserData] = useState({
  //title: "",
  //amount: "",
  //date: "",
  //});
  const titleHandler = (e) => {
    // setEnterdTitle(e.target.value);
    setEnterdTitle(e.target.value);
   // console.log(enterdTitle);
  };
  const amountHandler = (e) => {
    setEnterdAmount(e.target.value);
  };
  const dateHandler = (e) => {
    setEnterdDate(e.target.value);
  };
  const EnterdData = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enterdTitle,
      amount: enterdAmount,
      date: new Date(enterdDate),
    };
    props.onEnterdData(expenseData);

    //console.log(expenseData);
    //setUserData(expenseData)
    //console.log(userData);
    setEnterdTitle('')
    setEnterdAmount('')
    setEnterdDate('')
  };

  
  return (
    <form onSubmit={EnterdData}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterdTitle} onChange={titleHandler} />
        </div>
      
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterdAmount}
            onChange={amountHandler}
          />
        </div>
      
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enterdDate}
            onChange={dateHandler}
          />
        </div>
      </div>
      
      <div className="new-expense__actions">
      <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
