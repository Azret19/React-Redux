import {Outlet} from "react-router-dom"
import Navbar from "./Navbar";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <footer>Dummy JSON</footer>
        </div>
    )
}
export default Layout