/* eslint-disable react/prop-types */

function Card ({children}) {
    return (
      <div className="bg-white rounded-lg w-64 h-60">
        {children}
      </div>
    )
  }

  export default Card