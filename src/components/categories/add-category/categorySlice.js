import { createSlice } from "@reduxjs/toolkit";
import defaultCategories from "./categoriesData"

const addCategoryFn = (state, action) => {
    const { category } = action.payload;
    const existingCategory = state.find(c => c.name === category.name);
    if(existingCategory) {
        console.error('duplicate category name');
    } else {
        state.push(category);
    }
};
const categorySlice = createSlice({
  name: "category",
  initialState: defaultCategories,
  reducers: {
    addCategory: addCategoryFn,
  },
});

export const { addCategory } = categorySlice.actions;

export default categorySlice.reducer;
