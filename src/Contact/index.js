import React from 'react';
import {useParams} from 'react-router-dom'

function Contact(props) {
    const {id} = useParams();
    return (
        <div>
            <h1>contact@agence.com</h1>
            <h3>www.agenc.com</h3>
            <h1>{id} </h1>
        </div>
    );
}

export default Contact;