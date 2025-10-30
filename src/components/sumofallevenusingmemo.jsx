import { useMemo, useState } from "react";

export default function SumOfAllUsingMemo(){
    const [number,setNumber]=useState([1,2,3,4,5,5,6,6,6,7,7,8,9]);
    const [count,setCount]=useState(0);
    let totalresult=0;
    const SumOfAllNumberWhichAreEven=useMemo(()=>{
        console.log("inside uememo")
        for(let i=0;i<number.length;i++){
            if(number[i]%2===0){
            totalresult+=number[i];
            }
        }
        return totalresult + count;
    },[number])

    // console.log(SumOfAllNumberWhichAreEven())

    return(
        <>
        <p>sum of number {SumOfAllNumberWhichAreEven}</p>
        <button onClick={()=>setCount(count+1)}>Click me</button>
        </>
    )
       
    }
