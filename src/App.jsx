/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "./Pages/HomePage";
import RecipeDetailsPage from "./Pages/RecipeDetailsPage";

const API = "c9c3d429617148a1b979576b79f5d727"

function App() {
  const [popular, setPopular] = useState([]);
  const [Vegetarian, setVegetarian] = useState([])


  useEffect(function () {
    async function fetchRecipe() {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API}`
        );
        const data = await response.json();
        localStorage.setItem('recipes', JSON.stringify(data.recipes))
        setPopular(data.recipes)
        console.log(data.recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }

    const fetchedRecipe = localStorage.getItem("recipes")
    if(fetchedRecipe){
      setPopular(JSON.parse(fetchedRecipe))
    } else{
      fetchRecipe()
    }
  }, []);

    useEffect(function () {
    async function fetchVegetarian() {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?number=12&include-tags=vegetarian&apiKey=${API}`
        );
        const data = await response.json();
        localStorage.setItem('vegetarian', JSON.stringify(data.recipes))
        setVegetarian(data.recipes)

      } catch (error) {
        console.error("Error fetching vegetarian:", error);
      }
    }
    const fetchedVegetarian = localStorage.getItem('vegetarian')
    if(fetchedVegetarian){
      setVegetarian(JSON.parse(fetchedVegetarian))
    } else{
      fetchVegetarian()
    }
  }, []);

  return (
  
       <BrowserRouter>
        <Routes>
          <Route index element={<HomePage data={popular} vegetarian={Vegetarian}/>}/>
          <Route path="details" element={<RecipeDetailsPage/>}/>
        </Routes>

       </BrowserRouter>
        
      

  );
}
export default App;
