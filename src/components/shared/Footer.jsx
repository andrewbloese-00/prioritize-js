import React from 'react'

const Footer = () => {

 const footerStyle = {
  color: 'var(--text)',
  fontSize: '1rem',
  display: 'flex',
  justifyContent: 'center',
  
 }


 return (
  <footer>
   <span style={footerStyle}>
    PrioritizeJS | Established 2021
   </span>  
  </footer>
 )
}
export default Footer
