import "./Sidebar.css";
import { useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

const defaultSideBarMenu = [
  {
    id: "expenses",
    title: "Expenses",
    isActive: true,
    options: [
      {
        id: "list",
        title: "All Expenses",
        isActive: true,
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

function Sidebar() {
  const [sidebarMenu, onMenuSelection] = useState(defaultSideBarMenu);
  const navigateTo = useNavigate();

  function selectMainMenu(selectedMenu) {
    onMenuSelection((prevMenu) =>
      prevMenu.map((menu) => {
        if (menu.id === selectedMenu.id) {
          if (!menu.isActive) {
            navigateTo(`${menu.id}/${menu.options[0].id}`)
            return {
              ...menu,
              isActive: true,
              options: menu.options.map((option, idx) => ({
                ...option,
                isActive: idx === 0,
              })),
            };
          }
          return menu;
        } else {
          return {
            ...menu,
            isActive: false,
            options: menu.options.map((option, idx) => ({
              ...option,
              isActive: false,
            })),
          };
        }
      })
    );
    console.log(sidebarMenu);
  }

  function selectSubMenu(selectedMenu, selectedOption) {
    onMenuSelection((prevMenu) =>
      prevMenu.map((menu) => {
        return {
          ...menu,
          options: menu.options.map((option) => {
            return {
              ...option,
              isActive: option.id === selectedOption.id,
            };
          }),
        };
      })
    );
    navigateTo(`${selectedMenu.id}/${selectedOption.id}`);
    console.log(sidebarMenu);
  }

  return (
    <div className="sidebar">
      {sidebarMenu.map((menu) => {
        return (
          <div
            id={menu.id}
            className={menu.isActive ? "menu menu-active" : "menu"}
          >
            <p
              className="menu-title clickable"
              onClick={(e) => selectMainMenu(menu)}
            >
              {menu.title}
            </p>
            {menu.isActive &&
              menu.options.map((option) => {
                return (
                  <div
                    className={
                      option.isActive ? "option option-active" : "option"
                    }
                  >
                    <p
                      id={`${menu.id}-${option.id}`}
                      className="sub-menu-title clickable"
                      onClick={(e) => selectSubMenu(menu, option)}
                    >
                      {option.title}
                    </p>
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
