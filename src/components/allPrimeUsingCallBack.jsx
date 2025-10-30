import { useCallback, useState } from "react";

export default function PrimeNumbersuingUsecallback (){
    const [count,setCount]=useState(0);
   
    function isprime(num){
        if(num<2) return false;
        for(let i=2;i<num;i++){
          if(num%i===0)
          return false;
        }
        return true;
    }
    const primeNumber=useCallback(()=>{
         let result=0;
     for(let i=0;i<=count;i++){
         if(isprime(i)){
             result+=i;
         }
     }
     return result;
    },[count])
    
    return(
        <>
        <p>Sum of prime number is {primeNumber()}</p>
        <button onClick={()=>setCount(count+1)}>ISPrime</button>
        </>
    )
}

