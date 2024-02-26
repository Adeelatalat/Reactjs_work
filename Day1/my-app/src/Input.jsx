import React, { useState } from 'react'

const Input = () => {
    const [name,setName] = useState("Guest");
    const [quality,setQuality] = useState(1);
    const [comments,setComments] = useState("");
    const [payment,setPay] = useState("");

    function Name(event){
    setName(event.target.value);
    };

    function Quality(event){
        setQuality(event.target.value);
    }

    function Comments(event) {
setComments(event.target.value);

    }

    function Pay(e){
        setPay(e.target.value);
    }
  return (
    <div>
    <input type="text" name="" id="" value={name} onChange={Name}/>
    <p>Name: {name}</p>
    <input type="number" name="" id="" value={quality} onChange={Quality}/>
    <p>Quality: {quality}</p>
    <textarea name="" id="" cols="70" rows="10" onChange={Comments}>Type Here</textarea>
      <p>Comments : {comments}</p>


      <select name="" id="" value={payment} onChange={Pay}>
<option value="" selected>Select Option Here</option>
<option value="Paypal" >Paypal</option>
<option value="Visa" >Visa</option>
    </select>
    <p>Payment : {payment}</p>
  


    </div>
  )
}

export default Input
