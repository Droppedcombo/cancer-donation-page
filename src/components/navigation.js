import React from 'react';
import { NavLink } from 'react-router-dom';

export default function () {
    return (
        <div>
            <div>
                <NavLink exact to="/">Home</NavLink>
            </div>
            <div>
                <NavLink to="/bio">About</NavLink>
            </div>
            <div>
                <NavLink to="/donate">Donate</NavLink>
            </div>
            <div>
                <NavLink to="/portfolio">Portfolio</NavLink>
            </div>
            <div>
                <NavLink to="/contact">Conctact</NavLink>
            </div>
            <div>
                <NavLink to="/api">Whatever API we use </NavLink>
            </div>
        </div>
    )
}