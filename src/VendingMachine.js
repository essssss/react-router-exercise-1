import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import Socks from "./Socks";
import Mittens from "./Mittens";
import Jacket from "./Jacket";
import Navbar from "./Navbar";
import { version } from "react";

const VendingMachine = () => {
    return (
        <nav className="Navbar">
            <NavLink exact to="/mittens">
                Mittens
            </NavLink>
            <br />
            <NavLink exact to="/jacket">
                Jacket
            </NavLink>
            <br />
            <NavLink exact to="/socks">
                Socks
            </NavLink>
        </nav>
    );
};

export default VendingMachine;
