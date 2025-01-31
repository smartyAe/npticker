import React from 'react';
import imgHome from '../../home-img.png';
import logo from '../../logo-lg-nptker.png';
import PresentationContainer from '../PresentationContainer/PresentationContainer';

function Home() {
    return ( 
    <div className='ntk-body'>
        <PresentationContainer width={"100%"} height={"22em"} img={imgHome} logo={logo}/>
       
    </div> );
}

export default Home;