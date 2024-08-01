/* eslint-disable react/prop-types */

function Button({ children, type, onClick }) {
  const classVariation = {
    Filter: "flex flex-col items-center justify-center bg-black rounded-full text-white text-xs h-[62px] w-[62px] hover:bg-red-700 focus:bg-red-700",
    moreDetails: "border-2 border-black bg-white text-black font-medium px-3 py-2 hover:bg-black hover:text-white focus:bg-black focus:text-white",
  };

  return (
    <button className={`${classVariation[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
