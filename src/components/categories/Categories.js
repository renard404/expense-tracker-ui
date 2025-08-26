import { Routes, Route } from "react-router-dom";
import AddCategory from './add-category/AddCategory';
import CategoriesList from './categories-list/CategoriesList';

function Categories() {
  return (
    <div className="container">
        <div className="content">
            Categories component here
            <Routes>
              <Route path="add" element={<AddCategory/>}></Route>
              <Route path="edit" element={<AddCategory/>}></Route>
              <Route path="list" element={<CategoriesList/>}></Route>
            </Routes>
        </div>
    </div>
  );
}

export default Categories;
