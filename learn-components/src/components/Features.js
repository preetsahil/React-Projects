import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai";
function Features() {
    const myStyle={
        padding:'7px 20px',
        textAlign:'left',
        fontSize:'0.9rem',
        fontWeight:'bold',
        color:'#031623'
    }
    const iconStyle= { color: "blue",marginLeft:'5px',verticalAlign:'middle'}
  return (
    <div>
  <button style={myStyle}>
            See all features 
            <AiOutlineArrowRight style={iconStyle}/>
        </button>
    </div>
  )
}

export default Features