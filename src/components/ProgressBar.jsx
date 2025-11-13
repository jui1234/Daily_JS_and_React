import { clear } from "@testing-library/user-event/dist/clear";
import { useEffect, useRef, useState } from "react";

export default function ProgressBar(){
    const [increseLodder,setIncreselodder]=useState(0);
    const timerRef=useRef(null);

    useEffect(()=>{
           timerRef.current=setInterval(()=>{
            setIncreselodder((prev)=>{
                if(prev>=100){
                    clearInterval(timerRef.current);
                    return 100;
                }
                return prev+10;
            })
           },1000)

           return()=>{clearInterval(timerRef.current)}
    },[])

    const getColor=(increseLodder)=>{
        if(increseLodder<10) return 'pink';
        else if(increseLodder<20) return 'orange';
        else if(increseLodder<30) return 'yellow';
        else if(increseLodder<40) return 'blue';
        else if(increseLodder<50) return 'purple';
        else if(increseLodder<60) return 'red';
        else if(increseLodder<70) return 'brown';
        else if(increseLodder<80) return 'gray';
        else if(increseLodder<90) return 'black';
        else if(increseLodder<100) return 'pink';
        else return 'green';
    }
    return(
        <div>
           <div style={{backgroundColor:`${getColor(increseLodder)}`,transition:'width 0.1s ease-in-out',width:`${increseLodder}%`}}>{increseLodder}</div>
        </div>
    )
}

