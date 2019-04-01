//This component doesn't use state so we can make a functional component instead of a class based component.
import React from 'react';
//We don't want to work with anchor-tags but with links. So our page doesn't need to reload when clicking a link.
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/signup'>Sign Up</NavLink></li>
            <li><NavLink to='/signin'>Log In</NavLink></li>
        </ul>
    )
}
export default SignedOutLinks