import './Dashboard.css';
import Sidebar from './sidebar/Sidebar'
import { Routes, Route } from "react-router-dom";
import Expenses from '../expenses/Expenses'
import Categories from '../categories/Categories'
import Portfolio from '../portfolio/Portfolio';
function Dashboard() {
  return (
    <div className="dashboard">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="expenses/*" element={<Expenses/>}></Route>
            <Route path="categories/*" element={<Categories/>}></Route>
            <Route path="portfolio/*" element={<Portfolio/>}></Route>
          </Routes>
        </div>
    </div>
  );
}

export default Dashboard;
