/* eslint-disable react/prop-types */
import Slider from "./Slider"


function Vegetables({vegetarian}) {
  console.log(vegetarian)
  return (
    <section className="flex flex-col gap-1 mx-10 mb-10 md:mx-28">
        <h3 className="text-xl font-bold">Our Vegetarian Picks</h3>
        <Slider data={vegetarian}/>
    </section>
  )
}

export default Vegetables
