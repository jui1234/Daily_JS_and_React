import { useRef, useState } from "react";

const CountThrottling=()=>{
    const [count,setCount]=useState(0);
    const lastRef=useRef(0);
    
    const thr=(()=>{
        let now=Date.now();
        let delay=1000;
        if(now-lastRef.current>=delay){
            setCount((prev)=>prev+1)
            lastRef.current=now;
        }
    })
    return(
        <div style={{height:'600px',overflowY:'scroll',border:'2px solid black'}} onScroll={thr}>
        <p>scroll to increses the count</p>
        <p>{count}</p>
        <div style={{ height: "1000px" }} />
        <p>{count}</p>
        </div>
        
        )
}

export default CountThrottling;