import React from 'react'

const Event = () => {
// const handleClick =()=> console.log("Ouch");
// const handleClick2 = (name) => console.log(`${name} stop Clicking Me `);

// let count = 0;
// const handleClick3 = (name) => {
//     if(count < 3){
//         count++;
//         console.log (`${name} you  clicked me ${count} times  `);
//     }
//     else{
//         console.log (`${name} stop clicking me  `);
//     }

// }

const handlClick4 = (e) => e.target.textContent =" Yahoo";
  return (
    <>
      {/* <button onClick={()=>handleClick2("Adeela")}>Click Me &#x1F603;</button> */}
      {/* <button onClick={()=>handleClick3("Adeela")}>Click Me &#x1F603;</button> */}
      <button onClick={(e)=> handlClick4(e)}>Click Me &#x1F603;</button>
    </>
  )
}

export default Event
