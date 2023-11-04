import React from 'react'
import EachFeature from './EachFeature'
function Subtitle() {
    const myStyle={
        display:'flex',
        gap:'5px',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        marginTop:'30px',
    }
  return (
    <div style={myStyle}>
        <EachFeature/>
        <EachFeature/>
        <EachFeature/>
        <EachFeature/>
        <EachFeature/>
        <EachFeature/>
    </div>
  )
}

export default Subtitle