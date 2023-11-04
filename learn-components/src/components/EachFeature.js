import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai";
import {BsFillArrowUpLeftSquareFill} from "react-icons/bs";
function EachFeature() {
    const myStyle={
        padding:'7px 20px',
        textAlign:'left',
        fontSize:'0.9rem',
        fontWeight:'bold',
        color:'#031623',
    }
    const iconStyle= { color: "blue",marginLeft:'5px',verticalAlign:'middle'}
    const cardStyle={
        width:'27%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'30px'
    }
  return (
    <div style={cardStyle}>
       <BsFillArrowUpLeftSquareFill style={{backgroundColor:'white',color:'#11529D',fontSize:'2rem',borderRadius:'10px'}}/>
       <h3 style={{color:'#031623',marginBlock:'10px'}}>First click tests</h3>
       <p style={{color:'#888',marginTop:'0px',marginBottom:'13px',textAlign:'center'}}>Test interaction with first click and navigation tests.</p>
       <button style={myStyle}>
            Learn more 
            <AiOutlineArrowRight style={iconStyle}/>
        </button>
    </div>
  )
}

export default EachFeature