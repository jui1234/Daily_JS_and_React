import { useState } from "react";

export default function CountFunt() {
const [count,setCount]=useState(0);

const CountFunt=(()=>{
    setCount(count+1);
})
return(

<button onClick={CountFunt}>count</button>
)

}