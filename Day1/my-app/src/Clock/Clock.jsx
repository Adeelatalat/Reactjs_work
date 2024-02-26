import React, { useEffect, useState } from 'react'
import Colors from './clock.module.css'
import Useeffect from '../Useeffect';
const Clock = () => {

const [time,setTime] = useState(new Date());
useEffect(()=>{
const intId = setInterval(()=>{
  setTime(new Date())
},1000);
return ()=>{
  clearInterval(intId);
}
},[]);
function Time(){
  let hours = time.getHours();
  const mins = time.getMinutes();
  const sec = time.getSeconds();
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours%12 || 12;

  return `${padZero(hours)}:${padZero(mins)}: ${padZero(sec)}: ${padZero(meridiem)}`;
}
function padZero(number){
return (number <10 ? "0" : "") + number;
}
  
  return (
    <div className='clock-container' style={
      {

        backdropFilter:"blur(5px)",
        padding : "10px 0 ",
        textAlign :"center",
        display:"flex",
        justifyContent:"center",
        alignItems:'center',
        marginTop:"250px",
      backgroundImage:"linear-gradient( rgba(255,0,0,0), rgba(255,0,0,1))",
      borderRadius:"6px"
  
      }
    }>
    <div className='clock' style={{color: "Purple",fontSize:"6rem",
    fontWeight:"bold", fontFamily:"monospace", textShadow:"3px 3px 5px hsla(0,0%,0%,0.75", }}>
<span>{Time()}</span>
    </div>
      
    </div>
  )
}

export default Clock
