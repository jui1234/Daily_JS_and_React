import { use, useEffect, useState } from "react";

export default function CountFunt() {
const [count,setCount]=useState(0);

const CountFunt=(()=>{
    setCount(count+1);
})

const CountFuntDecrement=(()=>{
    setCount(count-1);
})

useEffect(()=>{
    localStorage.setItem("conterValue",count)
},[count])

useEffect(()=>{
    const data=localStorage.getItem("conterValue");
})
return(
    <>
<button onClick={CountFunt}>+</button>
<p>{count}</p>
<button onClick={CountFuntDecrement}>-</button>
    </>
)

}