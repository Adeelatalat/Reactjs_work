import React, { useState } from 'react'

const UpdateArray = () => {
    const [foods,setFood] = useState(["Apple","Orange","Banana","Graps"]);
    function FoodAdd(){
        const newfood = document.getElementById("FoodInp").value;
        document.getElementById("FoodInp").value = "";
        setFood(f=>[...f,newfood]);
    }
    function FoodRemove(i){
setFood(foods.filter((_,index)=>index !== i ))
    }
  return (
    <div >
      <h2>List Of Foods </h2>
      <ul>
        {foods.map((food,i)=><li key={i} onClick={()=>FoodRemove(i)}>{food}</li>)}
      </ul>
      <input type="text" id='FoodInp' placeholder='Enter fod Name' />
      <button onClick={FoodAdd}>Add Food</button>
    </div>
  )
}

export default UpdateArray
