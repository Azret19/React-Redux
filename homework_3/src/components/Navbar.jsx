import {NavLink} from "react-router-dom";

const activeLink = ({isActive}) => isActive ? "active-link" : ""

const Navbar = () => {
  return (
      <nav>
          <ul>
              <li>
                  <NavLink to="/" className={activeLink}>Home</NavLink>
              </li>
              <li>
                  <NavLink to="/form" className={activeLink}>Form</NavLink>
              </li>
          </ul>
      </nav>
  )
}
export default Navbar