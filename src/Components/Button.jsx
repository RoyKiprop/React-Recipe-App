/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function Button({ children, type, onClick, to }) {
  const classVariation = {
    Filter: "flex flex-col items-center justify-center gap-2 bg-black rounded-full text-white text-xs h-[65px] w-[65px] hover:bg-red-700 focus:bg-red-700",
    moreDetails: "border-2 border-black bg-white text-black font-medium px-1 py-1 md:px-3 md:py-2 hover:bg-black hover:text-white focus:bg-black focus:text-white",
  };

  const buttonContent = (
    <button className={`${classVariation[type]}`} onClick={onClick}>
      {children}
    </button>
  );

  if (to) {
    return <NavLink to={to}>{buttonContent}</NavLink>;
  }

  return buttonContent;
}

export default Button;
