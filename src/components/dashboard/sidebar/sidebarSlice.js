import { createSlice } from "@reduxjs/toolkit";

const defaultSidebar = [
  {
    id: "expenses",
    title: "Expenses",
    isActive: false,
    toggle: false,
    options: [
      {
        id: "list",
        title: "All Expenses",
        isActive: false,
      },
      {
        id: "add",
        title: "Add Expense",
        isActive: false,
      },
    ],
  },
  {
    id: "categories",
    title: "Categories",
    isActive: false,
    toggle: false,
    options: [
      {
        id: "list",
        title: "All Categories",
        isActive: false,
      },
      {
        id: "add",
        title: "Add Category",
        isActive: false,
      },
    ],
  },
];

const toggleMenuFn = (state, action) => {
  const { selectedMenu } = action.payload;
  const menu = state.find((menu) => menu.id === selectedMenu.id);
  menu.toggle = !menu.toggle;
};

const selectSubMenuFn = (state, action) => {
  const { selectedMenu, selectedOption } = action.payload;
  state.forEach((menu) => {
    menu.isActive = menu.id === selectedMenu.id;
    menu.toggle = menu.toggle || menu.isActive;
    menu.options.forEach((option) => {
      option.isActive = menu.isActive && option.id === selectedOption.id;
    });
  });
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: defaultSidebar,
  reducers: {
    toggleMenu: toggleMenuFn,
    selectSubMenu: selectSubMenuFn,
  },
});

export const { toggleMenu, selectSubMenu } = sidebarSlice.actions;

export default sidebarSlice.reducer;
