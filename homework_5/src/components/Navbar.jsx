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
                    <NavLink to="/products" className={activeLink}>Products</NavLink>
                </li>
                <li>
                    <NavLink to="/counter" className={activeLink}>My shopping cart</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar