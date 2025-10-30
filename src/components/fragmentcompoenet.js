import React from "react"

const ChildComponent=({childlisting})=>{
    // <>
    return(
        <>
        <h1>Child Component</h1>
       {childlisting.map((item)=>(
           <React.Fragment key={item.id}>
        {/* <> */}
        <h1>{item.id}:{item.age}={item.name}</h1>
         </React.Fragment>
       ))}
       </>
    )
    
}

const childlisting=[
    {id:1,name:"John",age:20},
    {id:2,name:"Jane",age:21},
    {id:3,name:"Jim",age:22},
    {id:4,name:"Jill",age:23},
   {id:5,name:"Jack",age:24},
    
]
export default function FragmentComponent(){
    return(
        <>
    <ChildComponent childlisting={childlisting}/>
    <h1>Fragment Component</h1>
        </>
    )
}

