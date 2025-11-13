import { useEffect, useRef, useState } from "react";

export default function LoaderComponent() {
  const [loaderCount, setLoaderCount] = useState(0);
  const timeRef=useRef(null);

  useEffect(()=>{
    timeRef.current=setInterval(()=>{
       setLoaderCount((prev)=>(prev+10)%360);
    },30)

    return()=>{clearInterval(timeRef.current)}
  },[])

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          border: "6px solid #f3c6d3", // light pink base
          borderTop: "6px solid #ff4db8", // highlight color for visible rotation
          borderRadius: "50%",
          transform: `rotate(${loaderCount}deg)`,
          transaction: 'transform 0.1s linear',
        }}
      ></div>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}
