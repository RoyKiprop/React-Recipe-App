/* eslint-disable react/prop-types */

function IngredientsPage({recipe}) {
  return (
    <div>
      <ul className="list-disc mt-6">
        {recipe.extendedIngredients.map(ingredient =>
        <li key={ingredient.id}>{ingredient.original}</li>


        )}
        
      </ul>
    </div>
  )
}

export default IngredientsPage
  