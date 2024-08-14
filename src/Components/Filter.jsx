import { FaPizzaSlice } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { GiNoodles } from "react-icons/gi";
import { GiCakeSlice } from "react-icons/gi";
import Button from '../Components/Button';

function Filter() {
  return (
    <nav>
      <ul className="flex justify-center space-x-4 md:space-x-8 mb-10">
        <li>
          <Button type="Filter" to="/category/African">
          <GiNoodles />
            African
          </Button>
        </li>
        <li>
          <Button type="Filter" to="/category/American">
            <FaHamburger/>
            American
          </Button>
        </li>
        <li>
          <Button type="Filter" to="/category/Italian">
          <FaPizzaSlice />
            Italian
          </Button>
        </li>
        <li>
          <Button type="Filter" to="/category/Japanese">
          <GiCakeSlice />
            Japanese
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default Filter;

