import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import RecipeDetailsPage from "./RecipeDetailsPage";
import FilteredSearch from "./SearchedPage";
import Cuisine from "./CuisinePage";

function AppNav() {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="details" element={<RecipeDetailsPage />} />
        <Route path="category/:country" element={<Cuisine />} />
        <Route path="searched/:search" element={<FilteredSearch />} />
      </Routes>
    </div>
  );
}

export default AppNav;
