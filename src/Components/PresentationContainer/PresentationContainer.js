import React from 'react';

function PresentationContainer(props) {
    return ( 
            <div className='ntk-ppcwi d-flex' style={{height:props.estyle.height, width:props.estyle.width,margin:props.estyle.margin}}>
                <div className='col-xs-12 col-lg-4'>
                    {
                        props.img!=undefined
                        ? <img width={400} height={300} src={props.img} />
                        :<span></span>
                        
                    }
                </div>
                <div className='col-xs-12 col-lg-8'>
                    <p className='ntk-wlc-msg' style={{fontSize:"3em"}}>
                        Welcome to &nbsp; <img width={300} height={120} src={props.logo} alt="Logo"/>
                    </p>
                </div>
            </div>
     );
}

export default PresentationContainer;