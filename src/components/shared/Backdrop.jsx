import React from 'react';
import '../../css/sidebar.css'

const Backdrop = ({show, click}) => 
{
 return show && <div className="backdrop" onClick={click}></div>;
}

export default Backdrop
