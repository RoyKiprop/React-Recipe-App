/* eslint-disable react/prop-types */

function Card ({children}) {
 

    return (
      <div className="bg-white rounded-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
        {children}
      </div>
    )
  }

  export default Card