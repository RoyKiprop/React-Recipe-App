/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

import Popular from "../Components/Popular";
import Vegetables from "../Components/Vegetables";


const API = import.meta.env.REACT_APP_API_KEY

function HomePage() {
  const [popular, setPopular] = useState([]);
  const [vegetarian, setVegetarian] = useState([])


  useEffect(function () {
    async function fetchRecipe() {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API}`
        );
        const data = await response.json();
        localStorage.setItem('recipes', JSON.stringify(data.recipes))
        setPopular(data.recipes)
        
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }

    const fetchedRecipe = localStorage.getItem("recipes")
    if(fetchedRecipe){
      
      setPopular(JSON.parse(fetchedRecipe))
      // console.log(fetchedRecipe)
      
    } else{
      fetchRecipe()
    }
  }, []);

    useEffect(function () {
    async function fetchVegetarian() {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?number=12&tags=vegetarian&apiKey=${API}`
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
      // console.log(fetchedVegetarian)
     
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
