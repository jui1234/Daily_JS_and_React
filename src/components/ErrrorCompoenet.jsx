import { useState } from "react";


export default function ErrorBoundry(){
    const [buttonClicked,setButtonClicked]=useState(false);
    
        if(buttonClicked){
        throw new Error("Error caught");
        }
    
    return(
        <>
         <p>This will show until you click the button.</p>
        <button onClick={()=>setButtonClicked(true)}>Crash The App</button>
        </>
        )
}