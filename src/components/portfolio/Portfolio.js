import { Routes, Route } from "react-router-dom";
import PortfolioSnapShot from "./portfolio-snapshot/PortfolioSnapshot";

function Portfolio() {
  return (
    <div className="container">
        <div className="content">
            Portfolio component here
            <Routes>
              <Route path="add" element={<PortfolioSnapShot/>}></Route>
              {/* <Route path="list" element={<PortfolioList/>}></Route> */}
            </Routes>
        </div>
    </div>
  );
}

export default Portfolio;
