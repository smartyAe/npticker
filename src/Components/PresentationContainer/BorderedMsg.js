import React from 'react';
function BorderedMsg(props) {
    return ( 
        <div className='ntk-ppcwi d-flex' style={{height:props.estyle.height, width:props.estyle.width,margin:props.estyle.margin}}>
                <span className={props.text.class}>{props.text.content}</span>
        </div>
     );
}

export default BorderedMsg;