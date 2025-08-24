import "./Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { toggleMenu, selectSubMenu } from "./sidebarSlice";
import { useEffect } from "react";

function Sidebar() {
  const sidebarMenu = useSelector((store) => store.sidebar);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const activeRoute = location.pathname.split("/");
    navigatePage({
      selectedMenu: { id: activeRoute[1] },
      selectedOption: { id: activeRoute[2] },
    });
  }, []);

  const navigatePage = ({ selectedMenu, selectedOption }) => {
    dispatch(selectSubMenu({ selectedMenu, selectedOption }));
    navigate(`/${selectedMenu.id}/${selectedOption.id}`);
  };

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
              onClick={() => dispatch(toggleMenu({ selectedMenu: menu }))}
            >
              {menu.title}
            </p>
            {menu.toggle &&
              menu.options.map((option) => {
                return (
                  <div
                    id={option.id}
                    className={
                      option.isActive ? "option option-active" : "option"
                    }
                  >
                    <p
                      id={`${menu.id}-${option.id}`}
                      className="sub-menu-title clickable"
                      onClick={() =>
                        navigatePage({
                          selectedMenu: menu,
                          selectedOption: option,
                        })
                      }
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
