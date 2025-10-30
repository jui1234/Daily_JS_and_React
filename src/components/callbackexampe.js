import { memo } from "react";

const CallbackExample=({gettext})=>{
    console.log("CallbackExample rendered",gettext)
    return(
        <>
        <h1>Callback Example</h1>
        {/* <p>{gettext()}</p> */}
        <button onClick={()=>gettext()}>Gettext</button>
        </>
    )   
}
export default memo(CallbackExample);