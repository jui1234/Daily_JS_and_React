import { useState, useTransition } from "react"

export default function ReactFiber(){
    const [list,setList]=useState([]);
    const [isPending,startTransition]=useTransition();

    const handleinputwithtransaction=(e)=>{

        const inputValue=e.target.value;

        startTransition(()=>{
            const itemsList=Array(50000).fill(0).map((_,index)=> `${inputValue}-${index}`)
            setList(itemsList)
        })
    }
    return(
    <>
    <input type="text" onChange={handleinputwithtransaction}></input>
    {isPending && <p>Loading...</p>}
    <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    
    </>)
}