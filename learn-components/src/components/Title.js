import React from 'react'
import Features from './Features'
function Title() {
const myStyle={
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
}
  return (
    <div style={myStyle}>
        <h2 style={{color:'#031623'}}>Your user research Swiss Army knife</h2>
        <Features/>
    </div>
  )
}

export default Title