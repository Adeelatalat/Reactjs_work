import React, { useState } from 'react'


const ColorPicker = () => {
    const [colr,setColr] = useState("#806683");
    function handlechange(e){

        setColr(e.target.value)
    }
  return (
    <div className='col-container'>
      <h1>Color Picker</h1>
      <div className='col-dispaly' style={{backgroundColor: 'color'}} >
<p>Selected Color :{colr}</p>
<label >Select a Color : </label>
<input type="color"  value={colr} onChange={handlechange}/>

      </div>
    </div>
  )
}

export default ColorPicker
