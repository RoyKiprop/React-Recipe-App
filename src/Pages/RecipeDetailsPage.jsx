/* eslint-disable react/prop-types */

import Button from "../Components/Button";
import IngredientsPage from "./IngredientsPage";
import { useEffect, useState } from "react";
import InstructionsPage from "./InstructionsPage";
import { useParams } from "react-router-dom";

const API = "c9c3d429617148a1b979576b79f5d727";

function RecipeDetailsPage() {
  const { Id } = useParams();

  const [activePage, setActivePage] = useState("instructions");
  const [details, setDetails] = useState({});

  function handleActivePage(page) {
    setActivePage(page);
  }

  useEffect(() => {
    const storageKey = `details_${Id}`;

    async function fetchSearched(id) {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API}`
        );
        const data = await response.json();
        console.log(data); 
        localStorage.setItem(storageKey, JSON.stringify(data));
        setDetails(data);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    }

    const storedDetails = localStorage.getItem(storageKey);
    if (storedDetails) {
      console.log(storedDetails)
      setDetails(JSON.parse(storedDetails));
    } else {
      fetchSearched(Id);
    }
  }, [Id]);

  return (
    <main>
      <div className="flex gap-10 mx-36 mt-10 w-[100%]">
        <div className="flex flex-col gap-4 w-[40%]">
          <p className="font-bold text-xl">{details.title}</p>
          <img
            src={details.image} 
            className="w-[90%] h-55 object-fill"
            alt="Recipe" 
          />
        </div>
        <div className="w-[60%]">
          <div className="flex gap-6">
            <Button
              type="moreDetails"
              onClick={() => handleActivePage("instructions")}
            >
              Instructions
            </Button>
            <Button
              type="moreDetails"
              onClick={() => handleActivePage("ingredients")}
            >
              Ingredients
            </Button>
          </div>
          {activePage === "instructions" && <InstructionsPage recipe={details} />}
          {activePage === "ingredients" && <IngredientsPage recipe={details}/>}
        </div>
      </div>
    </main>
  );
}

export default RecipeDetailsPage;
