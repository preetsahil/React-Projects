import React, { useState } from 'react'
import { AiFillQuestionCircle ,AiOutlineDown, AiOutlineUp} from "react-icons/ai";
import './Accordion.css'
function Accordion({title,content}) {
    const [isActive,setIsActive]=useState(false)
  return (
    <div className='accordion-item'>
        <div className="accordion-title" onClick={()=>{setIsActive(!isActive)}} >
        <AiFillQuestionCircle style={{verticalAlign:"top",marginRight:'5px'}}/>
               <div>{title}</div>
               <div className='icon'>{isActive? <AiOutlineDown/>:<AiOutlineUp/>}</div>
        </div>
        {isActive && <div className='accordion-content'>{content}</div>}
    </div>
  );
};
export default Accordion