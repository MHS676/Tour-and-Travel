import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Trippy</h1>
                <ul className="nav-menu">
                    <li>
                        <a href="/">Home</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
