/* eslint-disable react/prop-types */

function Button({children}) {
  return (
    <button className='flex flex-col items-center justify-center bg-black rounded-full text-white text-xs h-[62px] w-[62px] hover:bg-red-700 focus:bg-red-700'>
        {children} 
    </button>
  )
}

export default Button
