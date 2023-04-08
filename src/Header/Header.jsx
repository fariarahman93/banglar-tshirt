import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex gap-3 text-xl text-blue-600 justify-center items-center mb-5'>
            <Link to='/'>Home</Link>
            <Link to='/review'>Order-Review</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/grandpa'>Grandpa</Link>
        </nav>
    );
};

export default Header;