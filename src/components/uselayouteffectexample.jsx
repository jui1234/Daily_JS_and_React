import React, { useRef, useLayoutEffect } from 'react';
function Testfun({message}){
    const srollRef=useRef(null);
     const useLayoutEffect=(()=>{
         srollRef.current.scrollTop=srollRef.current.scrollHeight;
     },[message])
    return(
        <div ref={srollRef}>
        {message.mpa((item,index)=>(
        <p>{item}</p>
        ))}
        </div>
        )
}

export default Testfun;