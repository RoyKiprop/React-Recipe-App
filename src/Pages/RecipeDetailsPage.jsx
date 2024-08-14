/* eslint-disable react/prop-types */
import Button from "../Components/Button";
import IngredientsPage from "./IngredientsPage";
import { useEffect, useState } from "react";
import InstructionsPage from "./InstructionsPage";
import { useParams } from "react-router-dom";
import Summary from "./Summary";

const API = import.meta.env.VITE_API_KEY

function RecipeDetailsPage() {
  const { Id } = useParams();

  const [activePage, setActivePage] = useState("summary");
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
       
        localStorage.setItem(storageKey, JSON.stringify(data));
        setDetails(data);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    }

    const storedDetails = localStorage.getItem(storageKey);
    if (storedDetails) {
   
      setDetails(JSON.parse(storedDetails));
    } else {
      fetchSearched(Id);
    }
  }, [Id]);

  return (
    <main>
      <div className="flex flex-col space-y-10 mx-8 w-[90%] md:flex-row md:space-x-5 md:mx-36  md:w-[80%] ">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <p className="font-bold text-xl">{details.title}</p>
          <img
            src={details.image}
            className="w-[95%] md:w-[90%] h-55 object-fill"
            alt="Recipe"
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex gap-2">
            <Button
              type="moreDetails"
              onClick={() => handleActivePage("summary")}
            >
              Summary
            </Button>
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
          {activePage === "summary" && <Summary recipe={details} />}
          {activePage === "instructions" && (
            <InstructionsPage recipe={details} />
          )}
          {activePage === "ingredients" && <IngredientsPage recipe={details} />}
        </div>
      </div>
    </main>
  );
}

export default RecipeDetailsPage;
