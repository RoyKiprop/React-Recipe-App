import { GiKnifeFork } from "react-icons/gi";
import { NavLink } from "react-router-dom";
function Logo() {
  return (
    <NavLink to={'/'}>
      <GiKnifeFork className="h-8 w-8"/>
    </NavLink>
  )
}

export default Logo
