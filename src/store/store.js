import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "../components/dashboard/sidebar/sidebarSlice";
const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
  },
});

export default store;
