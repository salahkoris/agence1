import React from 'react';
import './style.css'

function Circuit(props) {
    return (
        <div className='card'>
            <img src={'http://localhost:3000/images/' + props.image} alt='test'/>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <div className='circuitFooter'>
                <span className='details'>Détails ...</span>
                <div className='btnAjouter'>+</div>
            </div>
        </div>
    );
}

export default Circuit;