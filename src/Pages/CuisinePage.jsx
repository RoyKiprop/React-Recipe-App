import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";



const API = "c9c3d429617148a1b979576b79f5d727";

function Cuisine() {

 const {country} = useParams();

  const [cuisine, setCuisine] = useState([]);

  useEffect(
    function () {
      async function fetchSearched(name) {
        try {
          const response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API}&number=12&cuisine=${name}`
          );
          const data = await response.json();
          localStorage.setItem("searchedItem", JSON.stringify(data));
          console.log(data);
          setCuisine(data.results);
        } catch (error) {
          console.error("Error fetching cuisines:", error);
        }
      }

      const storedSearch = localStorage.getItem("SearchedItem");
      if (storedSearch) {
        
        setCuisine(JSON.parse(storedSearch.results));

      } else {
        
        fetchSearched(country);
      }
    },
    [country]
  );
  return (
    // <div className="mx-28 grid grid-cols-4 gap-5">
    //   {cuisine.map((recipe, index) => (
    //     <Card key={index}>
    //       <div>
    //         <img
    //           src={recipe.image}
    //           alt={recipe.title}
    //           className="w-full  h-48 object-cover rounded-lg"
    //         />
    //         <h4 className="p-4 font-semibold text-gray-800 truncate">
    //           {recipe.title}
    //         </h4>
    //       </div>
    //     </Card>
    //   ))}
    // </div>
    <div>
      See Cuisines
    </div>
  );
}

export default Cuisine;
