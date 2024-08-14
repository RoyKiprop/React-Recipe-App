/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";
import { Link } from "react-router-dom";

function Filtered() {
  const { search } = useParams();

  const [searchData, setSearch] = useState([]);

  useEffect(
    function () {
      async function fetchSearched(name) {
        if (name.trim() === "") {
          setSearch([]);
          return;
        }

        try {
          const response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&query=${name}&number=12`
          );
          const data = await response.json();
          localStorage.setItem("searchedItem", JSON.stringify(data));
         
          setSearch(data.results);
        } catch (error) {
          console.error("Error fetching recipes:", error);
        }
      }

      const storedSearch = localStorage.getItem("SearchedItem");
      if (storedSearch) {
        setSearch(JSON.parse(storedSearch.results));
      } else {
        fetchSearched(search);
      }
    },
    [search]
  );
  return (
    <div className="mx-28 grid grid-cols-4 gap-5">
      {searchData.map((recipe, index) => (
        <Card key={index}>
          <Link to={`/recipe/details/${recipe.id}`}>
            <div>
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full  h-48 object-cover rounded-lg"
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

export default Filtered;
