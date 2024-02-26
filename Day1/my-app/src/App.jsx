import Button from "./Button"
import Card from "./Card"
import Food from "./Food"
import Foot from "./Foot"
import Header from "./Header"
import List from "./List"

import Event from "./Event"
import Clock from "./Clock/Clock"
import ColorPicker from "./ColorPicker"
import Input from "./Input"
import Todo from "./Todo"
import UpdateArray from "./UpdateArray"
import UpdateObject from "./UpdateObject"
import Useeffect from "./Useeffect"
import Usestate from "./Usestate"


import User from "./User"
import StopWatch from "./StopWatch"


function App() {


  // const fruits = [{ id:1, name: "apple", cal:83},
  //   {id:2, name: "orange" , cal:120}, 
  //   {id:3, name:"Pineapple", cal:230},
  //   {id:4, name:"Banana",cal:100}];


 return(

  <div>

{/* <Header/> */}
{/* <Usestate/> */}
{/* <Useeffect/> */}
<Clock />
{/* <StopWatch/> */}
{/* <Input/>
<ColorPicker/>
{/* <UpdateObject/> */}
{/* <UpdateArray/>
<Todo/> */ }
{/* <Event/> */}
         {/* {fruits.length  > 0 ? <List items={fruits} catagory="Fruits"/> : null}  */}
{/* <Food/>

<User  isLogin={false} username="Adeela"/>
<Button/>

<Card isStudent={true}/>
<Card title="Coding" isStudent={false}/>
<Foot/> */}
  </div>
 )
}

export default App
