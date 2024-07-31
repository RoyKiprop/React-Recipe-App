/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';


const API = "c9c3d429617148a1b979576b79f5d727"

function Search({filtered, setFiltered}) {
 

    useEffect(function () {
        async function fetchSearched() {
          try {
            const response = await fetch(
              `https://api.spoonacular.com/recipes/autocomplete?number=10&query={filtered}&apiKey=${API}`
            );
            const data = await response.json();
            console.log(data)
            setFiltered(data.recipes)

          } catch (error) {
            console.error("Error fetching recipes:", error);
          }
        }
        fetchSearched();
      }, [filtered, setFiltered]);
    
  return (
    <form className="flex justify-center w-full mb-4 mt-1">
      <div className="relative">
        <input
          value={filtered}
          type="text"
          className="bg-black text-white w-full pl-10 pr-4 py-2 rounded-xl focus:outline-none"
          placeholder="Search..."
          onChange={(e)=>setFiltered(e.target.value)}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
        />
      </div>
    </form>
  );
}

export default Search;
