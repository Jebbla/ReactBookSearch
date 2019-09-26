import React from 'react';
import './index.css'

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary text-white p-2">
            <div className="navbar-brand font-weight-bold">Google Books Search</div>
            <a className="nav-item nav-link text-white" href="/">Search</a>
            <a className="nav-item nav-link text-white" href="/saved">Saved</a>
        </nav>
    );
}

export default Nav; 