import { useCallback, useRef, useState } from "react";

const InputDebouncing=()=>{
    const timeref=useRef(null);
    const [input,setinput]=useState("");
    const deb=useCallback((e)=>{
        const value=e.target.value;
        clearTimeout(timeref.current)
        
        timeref.current=setTimeout(()=>{
            setinput(value);
        },1000)
    })

    console.log("InputDebouncing Rendered",input)
    return(
        <>
        <p>InputTimeout</p>
        <input type="text" onChange={deb}></input>
        </>
        )
}

export default InputDebouncing;