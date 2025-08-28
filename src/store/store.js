import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "../components/dashboard/sidebar/sidebarSlice";
import categorySlice from "../components/categories/add-category/categorySlice";
import portfolioSnapshotsSlice from "../components/portfolio/portfolio-snapshot/portfolioSnapshotSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    categories: categorySlice,
    portfolioSnapshots: portfolioSnapshotsSlice
  },
});

export default store;
