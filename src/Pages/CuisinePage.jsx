import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";
import { Link } from "react-router-dom";


const API = import.meta.env.REACT_APP_API_KEY

function Cuisine() {
  const { country } = useParams();
  const [cuisine, setCuisine] = useState([]);

  useEffect(() => {
    const storageKey = `searchedItem_${country}`;

    async function fetchSearched(name) {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API}&number=12&addRecipeInstructions=true&cuisine=${name}`
        );
        const data = await response.json();
        localStorage.setItem(storageKey, JSON.stringify(data));
        console.log(data.results);
        setCuisine(data.results);
      } catch (error) {
        console.error("Error fetching cuisines:", error);
      }
    }

    const storedSearch = localStorage.getItem(storageKey);
    if (storedSearch) {
      setCuisine(JSON.parse(storedSearch).results);
      console.log(cuisine);
    } else {
      fetchSearched(country);
    }
  }, [country]);

  return (
    <div className="mx-28 grid grid-cols-4 gap-5">
      {cuisine.map((recipe, index) => (
        <Card key={index}>
          <Link to={`/recipe/details/${recipe.id}`}>
            <div>
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h4 className="p-4 font-semibold text-gray-800 truncate">
                {recipe.title}
              </h4>
            </div>
          </Link>
        </Card>
      ))}
    </div>
  );
}

export default Cuisine;
