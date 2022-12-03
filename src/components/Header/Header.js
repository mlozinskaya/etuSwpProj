import React from "react";
import "../../styles/header.css"

export default function Navbar() {
    
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="header_container">
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li>
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li>
                            <a className="nav-link" href="/forum">Forum</a>
                        </li>
                        <li>
                            <a className="nav-link" href="/chat">Chat</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className="navbar-nav mr-auto">
                        <li>
                            <a className="nav-link" href="#">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
