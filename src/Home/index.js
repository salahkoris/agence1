import React from 'react';

export const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];
export function operation(tab,index){
    if (index==tab.length-1){
        console.log(tab[index] + '.')
        return (tab[index] + '.')

    }else if (index<=tab.length-1){
        console.log(tab[index] + ';')
        return (tab[index] + ';')
    }
}  

export function somme(a,b){
    return (a + b)
}
function index(props) {

    return (
        <div>
           <h1>Bienvenue {props.name} dans le site de desrt dream </h1> 
           <p>{somme(8,4)}</p>
           <h3>à faire: {shoppingList[1]} </h3>
           <button onClick={()=>operation(shoppingList,4)}>VOIR</button>
        </div>
    );
}

export default index;