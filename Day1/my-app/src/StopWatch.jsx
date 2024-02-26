import React, { useEffect, useRef, useState } from 'react'

const StopWatch = () => {

 

    const [isrun,setRun] = useState(false);
    const [elapse,setElapse] = useState(0);
    const intervalRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(()=>{
if(isrun){
  intervalRef.current =  setInterval(()=>{
      setElapse(Date.now()-startTimeRef.current)  
    },10)
}
return () =>{
    clearInterval(intervalRef.current);
}

    },[isrun]);
    function start(){

        setRun(true);
        startTimeRef.current = Date.now() - elapse
    }
    function stop(){
setRun(false);
    }
    function reset(){
        setElapse(0);
        setRun(false)

    }
    function formatTime(){
 let hours = Math.floor(elapse / (1000*60*60));
 let mins = Math.floor(elapse / (1000*60)%60);
 let secs = Math.floor(elapse / (1000)%60);
 let miliSec = Math.floor(elapse % 1000/10);
 hours = String(hours).padStart(2,"0");
 mins = String(mins).padStart(2,"0");
 secs = String(secs).padStart(2,"0"); 
 miliSec = String(miliSec).padStart(2,"0");

return `${hours}:${mins}${secs}:${miliSec}`;
    }
  return (
    <div className='stop-watch'>
    <div className='display'>
    {formatTime()}

    </div>
    <div className='control'>
<button className='start-button' onClick={start}>Start</button>
<button className='stop-button' onClick={stop}>Stop</button>
<button className='reset' onClick={reset}>Reset</button>
    </div>
      


    </div>
  )
}

export default StopWatch
