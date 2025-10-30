import { useMemo, useState } from "react";

export default function MemoFun(){
    const [count,setCount]=useState(0);
    const [Number,setNumber]=useState([]);
    const MagicNumber=useMemo(()=>{
        if(Number.length === 0){
            // Initial array
            return new Array(30_000_000).fill(0).map((_,index)=>{
                return{
                    index:index,
                    ismagic:index===20_000_000
                }
            })
        } else {
            // Use the Number array when it's set
            return Number;
        }
    },[Number])

    const FindMagicNumber=
    useMemo(()=>{
     return MagicNumber.find((item)=>item.ismagic);
    },[Number])
   
    return(
        <>
        <h1>MemoFun</h1>
        <p>Found Magic Number: {FindMagicNumber?.index}</p>
        <button onClick={()=>{
            const newCount = count + 1;
            setCount(newCount);
            console.log(FindMagicNumber?.index);
            if(newCount == 10){
                console.log("Number is changed",Number);
                setNumber(new Array(10_000_000).fill(0).map((_,index)=>{
                    return{
                        index:index,
                        ismagic:index===9_000_000
                    }
                }))
            }
        }}>Click me 
            <span>  {count}</span>
        </button>
        </>
    )
}