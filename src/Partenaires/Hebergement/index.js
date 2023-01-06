import React,{useContext} from 'react';
import {UserContext} from '../../App';

function Hebergement(props) {
    const user=useContext(UserContext);
    return (
        <div>
            <h1>Hebergement</h1>
            <h3>Bienvenue {user.name
            } </h3>
            <img src='http://localhost:3000/images/hotel.jpg' alt='hotel' />
        </div>
    );
}

export default Hebergement;