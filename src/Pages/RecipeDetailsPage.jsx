/* eslint-disable react/prop-types */

import Button from "../Components/Button"
// import Card from "../Components/Card"


function RecipeDetailsPage() {
  return (
    <div className="flex gap-2">
        {/* <Card type="recipeDetails">
            <p className="p-4 text-center font-semibold text-gray-800 truncate">
              {recipe.title}
            </p>
            <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-lg"
            />
        </Card> */}
        <Button type="Instructions">Instructions</Button>
        <Button type="Ingredients">Ingredients</Button>
      
    </div>
  )
}

export default RecipeDetailsPage
