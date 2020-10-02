import React from 'react';
import logo from '../../logo.svg';
import './navbar.scss';


const Nabvar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="logo" />
            <ul className="nav-links">
                <li>
                    <a className="nav-link" href="/">
                        Home
                    </a>
                </li>
                <li>
                    <a className="nav-link" href="/">
                        About
                    </a>
                </li>
                <li>
                    <a className='active nav-link' href="/">
                        Tours
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Nabvar;
