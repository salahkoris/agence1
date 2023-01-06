
import {render,screen} from '@testing-library/react';
import Home,{somme,operation,shoppingList}  from './'


describe('test home',()=>{
    test('Home s affiche bien',()=>{
        render(<Home />);
        const textElement=screen.getByText('Bienvenue dans le site de desrt dream');
        expect(textElement).toBeInTheDocument();
    })
    test('Home affiche le nom omar',()=>{
        render(<Home name='omar'/>);
        const textElement=screen.getByText('Bienvenue omar dans le site de desrt dream');
        expect(textElement).toBeInTheDocument();
    })
    
    test('somme de 3 et 4 fait 7',()=>{
        expect(somme(3,4)).toBe(7);
    })
    test('index 0 donne diapers. ',()=>{
        expect(somme(3,4)).toBe(7);
    })
})
