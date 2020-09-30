import React from 'react';
import logo from '../../logo.svg';

const Nabvar = () => {
    return (
        <navbar className="navbar">
            <img src={logo} alt="logo" />
            <ul className="nav-link">
                <li>
                    <a href="/">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/">
                        About
                    </a>
                </li>
                <li>
                    <a href="/">
                        Tours
                    </a>
                </li>
            </ul>
        </navbar>
    )
}

export default Nabvar;
