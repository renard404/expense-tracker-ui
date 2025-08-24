import './Dashboard.css';
import Sidebar from './sidebar/Sidebar'
import { Routes, Route } from "react-router-dom";
import Expenses from '../expenses/Expenses'
import Categories from '../categories/Categories'
function Dashboard() {
  return (
    <div className="container dashboard">
        <div className="sidebar">
            <Sidebar />
        </div>
        <div className="content">
          <Routes>
            <Route path="expenses/*" element={<Expenses/>}></Route>
            <Route path="categories/*" element={<Categories/>}></Route>
          </Routes>
        </div>
    </div>
  );
}

export default Dashboard;
