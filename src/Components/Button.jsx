/* eslint-disable react/prop-types */

function Button({children, type}) {

    const classVariation = {
        Filter: "flex flex-col items-center justify-center bg-black rounded-full text-white text-xs h-[62px] w-[62px] hover:bg-red-700 focus:bg-red-700",
        Ingredients: "border-2 border-black text-black font-medium bg-white px-3 py-3 ",
        Instructions: "text-white font-medium bg-black px-3 py-3"
    }

  return (
   <button className={`${classVariation[type]}`}>
    {children}
   </button>
  )
}

export default Button
