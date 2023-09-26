import React, { Component } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Trippy</h1>
                <ul className="nav-menu">
                    <li>
                        <Link to="/">
                            <i className="fa-solid fa-house"></i> Home
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
