import { useRef, useState } from "react";

export default function TimerConceptProject() 
{
    const timerref=useRef(0);
const secondref=useRef(null);
const [displaytime,setDisplayaTime]=useState("00:00:00");
const timmerRunningref=useRef(false);

const displayTimer=(()=>{
    const hrs=Math.floor(secondref.current/3600);
    const min=Math.floor((secondref.current%3600)/60)
    const sec=secondref.current%60;
    
    return `${hrs.toString().padStart(2,"0")}:${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`
})

const startTimer=(()=>{
    if(!timmerRunningref.current){
        timmerRunningref.current=true;
    timerref.current=setInterval(()=>{
        secondref.current++;
        setDisplayaTime(displayTimer());
    },1000)
//    return 
    }
})

const stopTimer=(()=>{
    if(timmerRunningref.current){
        timmerRunningref.current=false;
        clearInterval(timerref.current)
    }
})

const resetTimer=(()=>{
     
           timmerRunningref.current=false;
           clearInterval(timerref.current)
           timerref.current=0
           secondref.current=0;
           setDisplayaTime("00:00:00")
    
})
return(
<>
<div>{displaytime}</div>
<button onClick={startTimer}>START</button>
<button onClick={stopTimer}>STOP</button>
<button onClick={resetTimer}>RESET</button>
</>
)

}