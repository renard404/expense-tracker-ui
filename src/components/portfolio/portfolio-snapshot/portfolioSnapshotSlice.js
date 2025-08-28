import { createSlice } from "@reduxjs/toolkit";
import defaultPortfolioSnapshots from "./portfolioSnapshotsData"

const addPortfolioSnapshotFn = (state, action) => {
    const { portfolioSnapshot } = action.payload;
    const existingPortfolioSnapshot = state.find(c => c.date === portfolioSnapshot.date);
    if(existingPortfolioSnapshot) {
        console.error('duplicate portfolioSnapshot name');
    } else {
        state.push(portfolioSnapshot);
    }
    
};
const portfolioSnapshotSlice = createSlice({
  name: "portfolioSnapshot",
  initialState: defaultPortfolioSnapshots,
  reducers: {
    addPortfolioSnapshot: addPortfolioSnapshotFn,
  },
});

export const { addPortfolioSnapshot } = portfolioSnapshotSlice.actions;

export default portfolioSnapshotSlice.reducer;
