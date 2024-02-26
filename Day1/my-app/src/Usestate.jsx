import React, { useState } from 'react'

const Usestate = () => {

//     let [age,myAge] = useState(16);
// const update = () => {
// if(age >17){
//     myAge(age+2);

// }
// else{
//     myAge(age-3);
// }
// }

const [count,setCount] = useState(0);
const Increment = () =>{
    setCount (c =>c+1);
    setCount (c =>c+1);
    setCount (c =>c+1);
}

const Decrement = () =>{
    setCount(c=>c-1);
    setCount(c=>c-1);
    setCount(c=>c-1);
}

const Reset = () =>{
    setCount(c=>c=0);
}
  return (
    <div  className='whole'>
      {/* <button onClick={update}>User Age : `${age}`</button> */}

<p className='main'>{count}</p>
<div className='all'>
<button className='btn1' onClick={Decrement}>Decrememnt</button>
<button className='btn2' onClick={Reset}>Reset</button>
<button  className='btn3' onClick={Increment}>Increment</button>
</div>
    </div>





  )
}

export default Usestate
