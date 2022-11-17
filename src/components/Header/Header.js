import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%"}}>
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
