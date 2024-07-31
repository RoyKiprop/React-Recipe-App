/* eslint-disable react/prop-types */





function Card ({children, type}) {
  // const [selectedRecipe, setSelectedRecipe] = useState([])

  const classTypes = {
    recipe: "bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:scale-105 cursor-pointer",
    recipeDetails : ""
  }
  
    return (
      <div className={`${classTypes[type]}`}>
        {children}
      </div>
    )
  }

  export default Card