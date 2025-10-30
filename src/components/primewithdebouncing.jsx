// You are building a search bar in React where the user can type a number n, and you need to display all prime numbers up to n.
// However, to optimize performance, the prime number calculation should only run after the user stops typing for 500ms (debouncing).

import { useCallback, useRef, useState } from "react";

export default function PrimeWithDebouncingwithInput(){
    
    const inputref=useRef(null);
    const timeref=useRef(null);
    const [finalList,setFinalList]=useState([]);
    const [result,setResult]=useState(0);
  
    
    const isprime=(n)=>{
        if(n<=2)return false;
        
        for(let i=2;i<n;i++){
            if(n%i===0)return false;
        }
        return true
    }
    
    const makingdenounwork=useCallback((e)=>{
        console.log("debouncing working",e)
        const value=e.target.value;
        clearTimeout(timeref.current)
        
        timeref.current=setTimeout(()=>{
            let primenumber=parseInt(value);
            if(isNaN(primenumber))
            {
               finalList([]);
               return;
            }
            console.log("inside timeout",value)
            const primeList=[];
            for(let i=0;i<primenumber;i++){
                if(isprime(i)){
                    primeList.push(i);
                    setResult(prev=>prev+i);
                }
            }
            setFinalList(primeList);
        },500)
        return result;
    },[])
    return(
        <>
        <p>result of prime{result}</p>
        <p>result of  prime List{finalList.join(",")}</p>
        <input type="text" onChange={makingdenounwork} ></input>
        </>
        )
}