import { useCallback, useState } from "react";
import OptimizedProject from "./optimzedproject";

export default function OptimizedProjectParent(){
    const [count,setCount]=useState(0);
    const [name,setName]=useState("jui");

    const handleCount = useCallback(()=>{
        setCount(count+1);
    },[])//here we have use usecallback to stop rerendering of the component when the count is
    //  changed but if we put count in teh dependecy its go8ing to chage so bcz of that i have not put a count as dependency
    
    return(
        <>
        <OptimizedProject name={name} count={count} handleCount={handleCount}/>
        
        </>
    )
}