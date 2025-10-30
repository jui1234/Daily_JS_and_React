import { useRef, useState } from "react";

 export default function UncontrolledAndControlledComponent(){
    const [number,setNumber]=useState("");
    const numberref=useRef(null);
    const [error,setError]=useState("");

    function handlechange(e){
        const value=e.target.value;
        if(value.length > 10){
            setError("Mobile Number must be 10 digit");
            // setNumber(value);
        }else{
            setError("");
            setNumber(value);
        }
    }
    function handleRefClick(){
        const numbervalue=numberref.current.value;
        if(numbervalue.length > 10){
            setError("Mobile Number must be 10 digit");
        }else{
            setError("");
            console.log(numbervalue);
            // setNumber(numbervalue);
        }
    }
 return(
    <>
    <input onChange={handlechange} type="text" value={number}></input>
    {error && <p>{error}</p>}
    <button onClick={()=>setNumber(number)}>Button</button>
    {number && <p>Number: {number}</p>}
    <input ref={numberref} type="text" ></input>
    {error && <p>{error}</p>}
    <button onClick={()=>handleRefClick()}>Button</button>
    {number && <p>Number: {numberref.current.value}</p>}
    </>
 )

}