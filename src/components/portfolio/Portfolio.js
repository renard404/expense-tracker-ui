import { Routes, Route } from "react-router-dom";
import PortfolioSnapShot from "./portfolio-snapshot/PortfolioSnapshot";
import PortfolioStats from "./portfolio-stats/PortfolioStats";

function Portfolio() {
  return (
    <div className="container">
        <div className="content">
            Portfolio component here
            <Routes>
              <Route path="add" element={<PortfolioSnapShot/>}></Route>
              <Route path="stats" element={<PortfolioStats/>}></Route>
            </Routes>
        </div>
    </div>
  );
}

export default Portfolio;
