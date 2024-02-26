import React, { useState } from 'react'


const UpdateObject = () => {
    const [car,setCar] = useState({year:2024, make:"Ford",model:"Mustang"});
    function Year(e){
setCar(c =>({...c,year: e.target.value}))
    }
    function Make(e){
        setCar(c=>({...c,make:e.target.value}))
    }
    function Model(e){
        setCar(c=>({...c,model:e.target.value}))
    }
  return (
    <div>
      <p>Your Favourite car is: {car.year} {car.make}{car.model}</p>
      <input type="number"  value={car.year} onChange={Year}/><br />
      <input type="text"  value={car.make} onChange={Make}/><br />
      <input type="text" value={car.model} onChange={Model}/>
    </div>
  )
}

export default UpdateObject
