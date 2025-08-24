import { Routes, Route } from "react-router-dom";
import AddExpense from './add-expense/AddExpense';
import ExpensesList from './expenses-list/ExpensesList';

function Expenses() {
  return (
    <div className="container">
        <div className="content">
          <Routes>
            <Route path="add" element={<AddExpense/>}></Route>
            <Route path="list" element={<ExpensesList/>}></Route>
          </Routes>
        </div>
    </div>
  );
}

export default Expenses;
