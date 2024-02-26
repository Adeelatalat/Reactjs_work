import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const [count,setCount] = useState(0);
    const [colr,setColr] = useState("purple")
    useEffect(()=>{
        document.title = `Count: ${count} ${colr}`
    },[count,colr])
    function addCount(){
        setCount(c => c+1);
    }
    function subCount(){
        setCount(c => c-1);
    }
    function chngColor(){
        setColr(c=> c === "purple" ? "red" : "purple")
    }
  return (
    <div>
      <p style={{color: colr}}>Count : {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subCount}>Subtract</button><br />
      <button onClick={chngColor}>Change Color</button>
      <br /><br />
      <Height/>
    </div>
  )
}


const Height= () =>{
const [width,setWidth] =useState(window.innerWidth);
const [height,setheight] =useState(window.innerHeight);
useEffect(()=>{
    window.addEventListener("resize",handleResize);
    console.log("Event Listner Added ");
    return () =>{
        window.removeEventListener("resize",handleResize);
        console.log
        ("Event Listner Removed");
    }
},[]);



function handleResize(){
    setWidth(window.innerWidth);
    setheight(window.innerHeight)
}

return(
 <div>

    <p>Window Width : {width}px</p>
    <p>Window Height : {height}px</p>
 </div>


)

}
export default Useeffect
export {Height}
