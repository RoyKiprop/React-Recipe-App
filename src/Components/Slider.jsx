/* eslint-disable react/prop-types */
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import Card from "./Card";
import { Link } from "react-router-dom";

function Slider({ data }) {
  return (
    <div className="w-full py-4">
      <Splide
        tag="section"
        options={{
          perPage: 4,
          pagination: false,
          arrows: false,
          drag: "free",
          snap: true,
          gap: "1rem",
          type: "slide",
          perMove: 1,
          rewind: false,
        }}
      >
        {data.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Card>
              <Link to={`/recipe/details/${recipe.id}`}>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <p className="p-4 text-center font-semibold text-gray-800 truncate">
                  {recipe.title}
                </p>
              </Link>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Slider;
