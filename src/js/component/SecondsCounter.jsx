import React,{useState, useEffect} from "react";

const SecondsCounter = (props) => {
    let [counter, setCounter] = React.useState(0)
    useEffect(() => {
        setInterval(() => {
            setCounter(counter++)
            // console.log(counter);
        },1000);
    },[])
    return(
        <div className="w-50 mx-auto mt-5 rounded bg-light">
        <div className="bg-light rounded d-flex justify-content-center ">
        <h1 className="clock"> <img
          src="https://cdn-icons-png.flaticon.com/512/2928/2928750.png"
          alt="logo clock"
        /></h1>
        <h1 className="num p1">
          
        {Math.floor(counter / 100000) % 10}
      </h1>
      <h1 className="num ">
        {Math.floor(counter / 10000) % 10}
      </h1>
      <h1 className="num">
        {Math.floor(counter / 1000) % 10}
      </h1>
      <h1 className="num ">
        {Math.floor(counter / 100) % 10}
      </h1>
      <h1 className="num">
        {Math.floor(counter / 10) % 10}
      </h1>
      <h1 className="num">
        {Math.floor(counter / 1) % 10}
      </h1>
 
        </div>
       <h5 className="card-title text-center mb-5 pb-2">Time since loaded</h5>
    </div>
    );
}
export default SecondsCounter
