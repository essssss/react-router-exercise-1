import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
    return (
        <nav className="Navbar">
            <NavLink exact to="/mittens">
                Mittens
            </NavLink>
            <br />
            <NavLink exact to="/jacket">
                Jacket
            </NavLink>
            <NavLink exact to="/socks">
                Socks
            </NavLink>
        </nav>
    );
};

export default Navbar;
