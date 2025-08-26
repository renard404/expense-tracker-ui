import "./AddCategory.css";
import { useState } from "react";
import { addCategory } from "./categorySlice";
import { useDispatch } from "react-redux";

const defaultCategoryData = {
  name: "",
  type: null,
};
function Category() {
  const [categoryData, updateCategoryData] = useState(defaultCategoryData);
  const dispatch = useDispatch();

  const onInputChange = (event) => {
    updateCategoryData({
      ...categoryData,
      [event.target.name]: event.target.value,
    });
  };

  const submitCategory = (event) => {
    dispatch(addCategory({category: categoryData}));
    updateCategoryData(defaultCategoryData)
    // AddCategoryToDB(categoryData)
  };

  return (
    <div className="form-content">
      <h3>Add Category</h3>
      <form onSubmit={submitCategory}>
        <div>
          <label>Category</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={categoryData.name}
            onChange={onInputChange}
          ></input>
        </div>
        <div>
          <label>Type</label>
          <div className="radio-options">
            <label>
              <input type="radio" name="type" value="CREDIT" onChange={onInputChange} checked={categoryData.type === 'CREDIT'} />
              CREDIT
            </label>
            <label>
              <input type="radio" name="type" value="DEBIT" onChange={onInputChange} checked={categoryData.type === 'DEBIT'} />
              DEBIT
            </label>
          </div>
        </div>
      </form>
      <div className="options">
        <button className="btn btn-light">Cancel</button>
        <button className="btn btn-primary" onClick={submitCategory}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Category;
