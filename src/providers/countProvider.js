import { useState } from "react";
import { useCountContext } from "../context/context";

export default function CountProvider({children}){
  const [count,setCount]=useState(0);
  return(
     <useCountContext.Provider value={{count,setCount}}>{children}</useCountContext.Provider>
  )
}