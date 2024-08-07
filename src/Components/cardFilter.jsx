/* eslint-disable react/prop-types */
function CardFilter({ children }) {
    return (
      <div className="border rounded-lg overflow-hidden shadow-lg">
        {children}
      </div>
    );
  }
  
  export default CardFilter;
  