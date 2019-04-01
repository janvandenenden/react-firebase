//This component doesn't use state so we can make a functional component instead of a class based component.
import React from 'react';
//We don't want to work with anchor-tags but with links. So our page doesn't need to reload when clicking a link.
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>New Projects</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>JVDE</NavLink></li>
        </ul>
    )
}

export default SignedInLinks