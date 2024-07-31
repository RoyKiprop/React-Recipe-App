/* eslint-disable react/prop-types */

import Card from "./Card"

function Filtered({data}) {
  return (
    <div>
      <Card>
      <img src={data.image} alt={data.title} className="w-full h-48 object-cover rounded-lg" />
      <p className="p-4 text-center font-semibold text-gray-800 truncate">{data.title}</p>
      </Card>
    </div>
  )
}

export default Filtered
