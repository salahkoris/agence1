import React from 'react';
import {Link} from 'react-router-dom'
import './style.css'

function Navbar(props) {
    const id='9876';
    return (
        <div className='navbar'>

            <Link to='/'>Accueil</Link>
            <Link to='/circuits'>Circuits</Link>
            <Link to='/partenaires'>Partenaires</Link>
            <Link to={`/contact/${id}`}>Contact</Link>

        </div>
    );
}

export default Navbar;