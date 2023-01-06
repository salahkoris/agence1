import React, { useState } from 'react';
import {Link, Outlet} from 'react-router-dom';
import User from './User';
export const MonContext=React.createContext();

function Partenaires(props) {
    const [user,setUser]=useState('salah');
    const modifUser=(nom)=>{
        setUser(nom);
    }
    return (
        <div>
            <h1>Nos Partenaires</h1>
            <MonContext.Provider value={{user,modifUser}}>
                <User />
            </MonContext.Provider>
            
            <Link to='/partenaires/locationvoiture'>Location de voiture</Link>
            <Link to='/partenaires/hebergement'>Hebergement</Link>
            <Outlet />
        </div>
    );
}

export default Partenaires;