import React from 'react';

function PresentationContainer(props) {
    return ( 
            <div className='ntk-ppcwi d-flex' style={{height:props.estyle.height, width:props.estyle.width,margin:props.estyle.margin}}>
                
                    {
                        props.img!=undefined
                        ? <div className='col-xs-12 col-lg-4'>
                            <img width={400} height={300} src={props.img} />
                        </div>
                        :<div></div>
                        
                    }
                
                <div className='col-xs-12 col-lg-8'>
                    
                        {
                            props.img!=undefined
                            ? <p className='ntk-wlc-msg' style={{fontSize:"3em"}}>
                                {props.text1} &nbsp; <img width={300} height={120} src={props.logo} alt="Logo"/>
                                <br/>
                                <h4>{props.text2}</h4>
                            </p>
                            :<p className='ntk-wlc-msg' style={{fontSize:"3em"}}
                                >{props.text1}  <br/>
                                <h4>{props.text2}</h4>
                            </p>
                            
                        }
                        
                </div>
            </div>
     );
}

export default PresentationContainer;