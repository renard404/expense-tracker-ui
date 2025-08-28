import { useState } from "react";
import "./PortfolioSnapshot.css";
import Piechart from "../portfolio-charts/Piechart";
import { addPortfolioSnapshot } from "./portfolioSnapshotSlice";
import { useDispatch, useSelector } from "react-redux";
const defaultInvestment = {
  asset: "",
  investmentType: "",
  amount: null,
  remark: "",
};
function PortfolioSnapShot() {
  const portfolios = useSelector((store) => store.portfolioSnapshots);
  const [investments, setInvestments] = useState([...portfolios[0].investments]);
  const [meta, setMeta] = useState([]);
  const dispatch = useDispatch();

  function isValid(investment) {
    return investment.asset && investment.amount;
  }
  const handleInputChange = (e, index) => {
    investments[index] = {
      ...investments[index],
      [e.target.name]: e.target.value
    };
    setInvestments([...investments]);
    calculateMeta();
  };
  const calculateMeta = () => {
    const meta = {};
    let total = 0;
    let isMetaValid = true;

    investments.forEach((investment) => {
      if (!isValid(investment)) {
        isMetaValid = false;
        return;
      }
      if (!meta[investment.asset]) {
        meta[investment.asset] = {
          asset: investment.asset,
          amount: 0,
          percentage: 0,
        };
      }
      total += Number(investment.amount);
      meta[investment.asset].amount += Number(investment.amount);
    });
    if (isMetaValid) {
      Object.entries(meta).forEach(([asset, metadata]) => {
        meta[asset].percentage = Number(
          ((meta[asset].amount * 100) / total).toFixed(2)
        );
      });
      setMeta(Object.values(meta));
    }
  };
  const addInvestmentRow = () => {
    setInvestments([...investments, defaultInvestment]);
  };
  const submitPortfolio = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    dispatch(
      addPortfolioSnapshot({
        portfolioSnapshot: {
          date: data.date,
          investments,
        },
      })
    );
    e.currentTarget.reset();
    setInvestments([defaultInvestment]);
  };
  return (
    <div className="protfolio-snapshot">
      <div className="form-content width-50">
        <h3>Add Portfolio snapshot</h3>
        <form onSubmit={submitPortfolio}>
          <div>
            <label>As on date</label>
            <input className="form-control" type="date" name="date"></input>
          </div>
          <div className="investments-list">
            <h6>Investments</h6>
            {investments.map((investment, index) => {
              return (
                <div key={index} className="investment">
                  <div>
                    <label>Asset</label>
                    <input
                      className="form-control"
                      type="text"
                      name="asset"
                      value={investment.asset}
                      onChange={(e) => handleInputChange(e, index)}
                    ></input>
                  </div>
                  <div>
                    <label>Investment type</label>
                    <input
                      className="form-control"
                      type="text"
                      name="investmentType"
                      value={investment.investmentType}
                      onChange={(e) => handleInputChange(e, index)}
                    ></input>
                  </div>
                  <div>
                    <label>Amount(in K)</label>
                    <input
                      className="form-control"
                      type="number"
                      name="amount"
                      value={investment.amount}
                      onChange={(e) => handleInputChange(e, index)}
                    ></input>
                  </div>
                  <div>
                    <label>Remark</label>
                    <input
                      className="form-control"
                      type="text"
                      name="remark"
                      value={investment.remark}
                      onChange={(e) => handleInputChange(e, index)}
                    ></input>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="btn btn-primary"
            type="button"
            onClick={addInvestmentRow}
          >
            Add more...
          </button>

          <div className="options">
            <button type="button" className="btn btn-light">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="portfolio-piechart">
        <Piechart meta={meta} />
      </div>
    </div>
  );
}

export default PortfolioSnapShot;
