import React, { useContext } from "react";
import { useCountContext } from "../context/context";

export default function Navbar ({gettext}){
    console.log("navbar rendered",gettext)
 const{count,setCount}=useContext(useCountContext)
    function handleIncrement(){
         setCount(count+1)
    }
    function handleDecrement(){
         setCount(count-1)
    }
    function handleReset(){
         setCount(0)
    }
 
return(
<>
<button onClick={handleIncrement}>Increment</button>
<button onClick={handleDecrement}>Decrement</button>
<button onClick={handleReset}>Reset</button>
<p>{count}</p>
<p>iiiiiiiiiiiiiiiiiii</p>
<p>{gettext()}</p>

</>
)
}
