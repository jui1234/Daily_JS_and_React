import { useRef, useState } from "react";

export default function TimerStopper(){
    const timerRef=useRef(0);
const timerStartedRef=useRef(false);
const [timeLeft,setTimeLeft]=useState(120);

const displayFunction=((second)=>{
    const min=Math.floor(second/60);
    const sec=second%60;
    
    return`${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`
})

const startTimer=(()=>{
    if(!timerStartedRef.current && timeLeft>0){
        timerStartedRef.current=true;
        timerRef.current=setInterval(()=>{
            setTimeLeft((prev)=>{
                if(prev<=1){
                    clearInterval(timerRef.current)
                    return 0;
                }
                return prev-1;
            })
        },1000)
    }
})

const stopTimmer=(()=>{
    timerStartedRef.current=false;
    clearInterval(timerRef.current)
})

const resetTimer=(()=>{
    stopTimmer();
    setTimeLeft(120);
})
    return(
        <>
        {/* <>This is an interval which auto stops when it reaches 00:00</> */}
        <div>{displayFunction(timeLeft)}</div>
        <button onClick={startTimer}>START</button>
        <button onClick={stopTimmer}>STOP</button>
        <button onClick={resetTimer}>RESET</button> 
        </>
    )
}