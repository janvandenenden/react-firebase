//This component doesn't use state so we can make a functional component instead of a class based component.
import React from 'react';
//We don't want to work with anchor-tags but with links. So our page doesn't need to reload when clicking a link.
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Mario Plan</Link>
                <SignedInLinks />
                <SignedOutLinks />


            </div>
        </nav>
    )
}

export default Navbar