import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCategory from './add-category/AddCategory';
import CategoriesList from './categories-list/CategoriesList';

function Categories() {
  return (
    <div className="container">
        <div className="content">
            Categories component here
            {/* <Router> */}
              <Routes>
                <Route path="add" element={<AddCategory/>}></Route>
                <Route path="list" element={<CategoriesList/>}></Route>
              </Routes>
            {/* </Router> */}
        </div>
    </div>
  );
}

export default Categories;
