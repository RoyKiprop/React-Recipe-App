import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";
import { Link } from "react-router-dom";


function Cuisine() {
  const { country } = useParams();
  const [cuisine, setCuisine] = useState([]);

  useEffect(() => {
    const storageKey = `searchedItem_${country}`;

    async function fetchSearched(name) {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&number=12&addRecipeInstructions=true&cuisine=${name}`
        );
        const data = await response.json();
        localStorage.setItem(storageKey, JSON.stringify(data));
        
        setCuisine(data.results);
      } catch (error) {
        console.error("Error fetching cuisines:", error);
      }
    }

    const storedSearch = localStorage.getItem(storageKey);
    if (storedSearch) {
      setCuisine(JSON.parse(storedSearch).results);
    
    } else {
      fetchSearched(country);
    }
  }, [country]);

  return (
    <div className="mx-28 grid md:grid-cols-4 gap-5">
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
