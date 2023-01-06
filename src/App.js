import React, {createContext} from 'react';
import Circuits from './circuits';
import Header from './header/Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Partenaires from './Partenaires';
import Contact from './Contact';
import LocationVoiture from './Partenaires/locationVoiture';
import Hebergement from './Partenaires/Hebergement';
import {Routes,Route} from 'react-router-dom';

const user={name:'salah'};
export const UserContext=createContext();

function App(props) {
    return (
        <UserContext.Provider value={user}>
        <div>
            <Header />
            <Navbar />
            <Routes>
                <Route path='/' element={<Home name='salah'/>} />
                <Route path='/circuits' element={<Circuits />} />
                <Route path='/partenaires' element={<Partenaires />}>
                    <Route path='/partenaires/locationvoiture' element={<LocationVoiture />} />
                    <Route path='/partenaires/hebergement' element={<Hebergement />} />
                </Route>
                <Route exact path='/contact' element={<Contact />} />
                <Route path='/contact/:id' element={<Contact />} />
            </Routes>
            <Footer />
        </div>
        </UserContext.Provider>
    );
}

export default App;