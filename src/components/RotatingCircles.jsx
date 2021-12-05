import React from 'react'

const RotatingCircles = ({sideToggle}) => {
 if(sideToggle === false) return null 
 return (
  <>
   <div id='circle_1'/>
   <div id='circle_2'/>
  </>
 )
}

export default RotatingCircles
