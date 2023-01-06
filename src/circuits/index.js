import React from 'react';
import Circuit from './ciruit/Circuit';
import './style.css';
import {produits} from '../Api/circuits'
import Asidebar from './asidebar/Asidebar';
function Circuits(props) {
    const elements=produits.map(elt=>
        <Circuit    
            key={elt.id }
            name={elt.name} 
            description={elt.description} 
            image={elt.image} 
        /> 
    )
    return (
        <div className='container'>
            <h1>Circuits</h1>
            <div className='cardcontainer'>
                {elements}
            </div>
            <Asidebar />
            
        </div>
    );
}
export default Circuits;