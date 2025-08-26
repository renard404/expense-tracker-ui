import { useDispatch, useSelector } from "react-redux";
import "./CategoriesList.css";
import { useNavigate } from "react-router-dom";
import { selectSubMenu } from "../../dashboard/sidebar/sidebarSlice";

function CategoriesList() {
  const categories = useSelector((store) => store.categories);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateToAddCategory = () => {
    dispatch(
      selectSubMenu({
        selectedMenu: { id: "categories" },
        selectedOption: { id: "add" },
      })
    );
    navigate("/categories/add");
  };
  return (
    <div>
      <h4>Categories</h4>
      {categories.length ? (
        <div className="categories">
          {categories.map((category) => {
            return (
              <div className={`category ${category.type}`}>
                <h4>{category.name}</h4>
                <h6>{category.type}</h6>
              </div>
            );
          })}
        </div>
      ) : (
        <h6>No category found</h6>
      )}
      <button className="btn btn-primary" onClick={navigateToAddCategory}>
        Add new Category
      </button>
    </div>
  );
}

export default CategoriesList;
