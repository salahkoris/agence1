import React , {useContext} from 'react';
import {MonContext} from '../../Partenaires'


function User(props) {
    const user=useContext(MonContext);
    return (
        <div>
            <h1>Utilisateur: {user.User} </h1>
            <button onClick={()=>props.modifUser('Mohamed Essalah KORIS')}>OK</button>
        </div>
    );
}

export default User;