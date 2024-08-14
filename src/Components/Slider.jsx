/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
import { Link } from "react-router-dom";

function ProductSlider({ data }) {
  const settings = {
    dots: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false, 
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((recipe) => (
          <Card key={recipe.id}>
            <Link to={`/recipe/details/${recipe.id}`}>
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <p className="p-4 text-center font-bold text-gray-800 truncate">
                {recipe.title}
              </p>
            </Link>
          </Card>
        ))}
      </Slider>
    </div>
  );
}

export default ProductSlider;
