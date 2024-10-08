/* eslint-disable react/prop-types */
import Slider from "./Slider"


function Popular({data}) {
  return (
    <section className="flex flex-col gap-1  mx-10 md:mx-28">
        <h3 className="text-xl font-bold">Trending</h3>
        <Slider data={data}/>
    </section>
  
  )
}

export default Popular
