
//below start example of props drilling props drilling means sending data from parent chuld and child its child 
//in below exaple we pass data from app.jsx to child.jsx and from child.jsx to footer.jsx by using props


import React from 'react'

const Footer = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.subject}</h1>
    </div>
  )
}

export default Footer;

