import React from 'react';
import Sidebar from '../Sidebar/SideBar';
import PresentationContainer from '../PresentationContainer/PresentationContainer';

function Contact() {
    return ( 
        <section>
            <div className='ntk-body'>
                <PresentationContainer text1="Get in touch" text2="Besoin de collaboration ou d'informations, n'hésitez pas à nous contacter!" estyle={{ width: "100%", height: "12em" }} />
            </div>
        </section>
     );
}

export default Contact;