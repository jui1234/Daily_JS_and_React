import { useState } from "react";

export default function ReconsilationReact(){
    const [count,setCount]=useState(0);
    return(
        <>
        <p>this does not change</p>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}> Increment</button> 
        </>
    )

}