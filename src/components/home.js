import React, { useContext } from 'react'
import { useCountContext } from '../context/context';

export default function Home(){
    const {count}=useContext( );
return(
<>
Home Page
<p>Count: {count}</p>
</>
)
}