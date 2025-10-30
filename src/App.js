import logo from './logo.svg';
import './App.css';
import React, { Suspense, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import CountProvider from './providers/countProvider';
import MemoFun from './components/memofun';
import CallbackExample from './components/callbackexampe';
import UncontrolledAndControlledComponent from './components/uncontrollerdandcontrolledcomponet';
import FragmentComponent from './components/fragmentcompoenet';
import ReconsilationReact from './components/reconsilationreact';
// import ReactFiber from './components/reactfiber';
import OptimizedProjectParent from './components/optimizedprojectparent';
import VirtualizationComponent from './components/virtualizationreact';
import SumOfAllUsingMemo from './components/sumofallevenusingmemo';
import PrimeNumbersuingUsecallback from './components/allPrimeUsingCallBack';
import PrimeWithDebouncingwithInput from './components/primewithdebouncing';
import NumberScrollFib from './components/scrollwithfibo';


const ReactFiber=React.lazy(()=>import('./components/reactfiber'))


function App() {
  // const timerref=useRef(null);
  // const boxRef=useRef(null);
  // const [widthSize,setWidthSize]=useState(0);
  // const [timer,setTimer]=useState(0);
  // const [texts,settexts]=useState("Hello");
  // function handleStartTimer(){
  //   timerref.current=setInterval(()=>{
  //     setTimer(prev=>prev+1)
  //   },100)
  // }
  // function handlestopTimer(){
  //  clearInterval(timerref.current)
  //  timerref.current=null;
  // }
  // function handleresetTimer(){
  //   setTimer(0);
  //   handlestopTimer();
  // }
  // // const gettext=(()=>{return "Hello"})

  // const gettext=useCallback(()=>{
  //   return "Hello";
  // },[])


  // useLayoutEffect(()=>{
  //   const containerWidth = boxRef.current.parentElement.getBoundingClientRect().width;
  //   const initialWidth = containerWidth * 0.1; // 10% of container
  //   boxRef.current.style.width = initialWidth + "px";
  //   setWidthSize(initialWidth);
  // },[])

  // function handleresize(){
  //   const currentWidth = boxRef.current.getBoundingClientRect().width;
  //   const newWidth = currentWidth + (currentWidth * 0.1); // Increase by 10%
  //   boxRef.current.style.width = newWidth + "px";
  //   setWidthSize(newWidth);
  // }
  
  return (
    <>
    {/* <CountProvider>
 
 <button onClick={handleStartTimer}>START</button>
 <p>{timer}</p>
 <button onClick={handlestopTimer}>STOP</button>
 <button onClick={handleresetTimer}>RESET</button>
 <div>
 
 <Navbar gettext={gettext}/>
 <Home/>
 </div>
 <div>
  <div ref={boxRef} style={{ width:widthSize,backgroundColor:"red" }}> width size</div>
  <p>{widthSize}</p>
  <button onClick={handleresize}>resize</button>
 </div>
 <MemoFun/>
 </CountProvider> */}
 {/* <CallbackExample gettext={gettext}/> */}
 {/* <UncontrolledAndControlledComponent/>
 <FragmentComponent/>
 <ReconsilationReact/> */}
 {/* <OptimizedProjectParent/>
 <Suspense fallback={
  <div>Loading...</div>
 }>
 <ReactFiber/>
 </Suspense> */}
 <SumOfAllUsingMemo/>
 <PrimeNumbersuingUsecallback/>
 <PrimeWithDebouncingwithInput/>
 <NumberScrollFib/>
 {/* <VirtualizationComponent/> */}
 </>
   
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
