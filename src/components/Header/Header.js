import React from "react";
import "../../styles/header.css"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="header_container">
                <div>
                    <a className="navbar-nav mr-auto nav-link" href="#">
                        Button
                    </a>
                </div>
                <div>
                    <a className="navbar-nav mr-auto nav-link" href="#">
                        Login
                    </a>
                </div>
            </div>
        </nav>
    );
}
