/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

import Popular from "../Components/Popular";
import Vegetables from "../Components/Vegetables";



function HomePage() {
  const [popular, setPopular] = useState([]);
  const [vegetarian, setVegetarian] = useState([])


  useEffect(function () {
    async function fetchRecipe() {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?number=10&apiKey=${import.meta.env.VITE_API_KEY}`
        );
        const data = await response.json();
        localStorage.setItem('recipes', JSON.stringify(data.recipes))
        setPopular(data.recipes)
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }
  
    const fetchedRecipe = localStorage.getItem("recipes")
    if(fetchedRecipe && fetchedRecipe !== "undefined"){
      try {
        setPopular(JSON.parse(fetchedRecipe))
      } catch (error) {
        console.error("Error parsing stored recipes:", error);
        fetchRecipe() 
      }
    } else {
      fetchRecipe()
    }
  }, []);

  useEffect(function () {
    async function fetchVegetarian() {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?number=10&tags=vegetarian&apiKey=${import.meta.env.VITE_API_KEY}`
        );
        const data = await response.json();
        localStorage.setItem('vegetarian', JSON.stringify(data.recipes))
        setVegetarian(data.recipes)
      } catch (error) {
        console.error("Error fetching vegetarian:", error);
      }
    }
  
    const fetchedVegetarian = localStorage.getItem('vegetarian')
    if(fetchedVegetarian && fetchedVegetarian !== "undefined"){
      try {
        setVegetarian(JSON.parse(fetchedVegetarian))
      } catch (error) {
        console.error("Error parsing stored vegetarian recipes:", error);
        fetchVegetarian()
      }
    } else{
      fetchVegetarian()
    }
  }, []);
  

  return (
    <div>
      <Vegetables vegetarian={vegetarian} />
      <Popular data={popular} />

    </div>
  );
}

export default HomePage;
