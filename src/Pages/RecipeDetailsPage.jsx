/* eslint-disable react/prop-types */

import Button from "../Components/Button";
import HeaderSection from "../Components/HeaderSection";
import IngredientsPage from "./IngredientsPage";
import { useState } from "react";
import InstructionsPage from "./InstructionsPage";

function RecipeDetailsPage() {
  const [activePage, setActivePage] = useState("instructions");

  function handleActivePage(page) {
    setActivePage(page);
  }

  return (
    <main>
      <HeaderSection />
      <div className="flex gap-10 mx-36 mt-10 w-[100%]">
        <div className="flex flex-col gap-4 w-[40%] ">
          <p className="font-bold text-xl">Mango Mango</p>
          <img
            src="../public/658850-556x370.jpg"
            className="w-[90%] h-55 object-fill"
          ></img>
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
          {activePage === "instructions" && <InstructionsPage />}
          {activePage === "ingredients" && <IngredientsPage />}
        </div>
      </div>
    </main>
  );
}

export default RecipeDetailsPage;
