import React from 'react';
import PresentationContainer from '../PresentationContainer/PresentationContainer';

function Home() {
    return ( 
    <div className='ntk-body'>
        <p className='ntk-wlc-msg'>
            Bienvenue chez <b>NPTICKER</b>, nous offrons la solution numérique adéquate à vos besoins
        </p>
        <PresentationContainer/>
        <div>
            
        </div>
    </div> );
}

export default Home;