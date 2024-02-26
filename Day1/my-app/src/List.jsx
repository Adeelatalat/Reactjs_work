
import PropTypes from 'prop-types';
const List= (props) =>{
    // const fruits = [{ id:1, name: "apple", cal:83},
    // {id:2, name: "orange" , cal:120}, 
    // {id:3, name:"Pineapple", cal:230},
    // {id:4, name:"Banana",cal:100}];
    // fruits.sort((a,b)=>a.name.localeCampare(b.name)); // alphabetical
    // fruits.sort((a,b)=>b.name.localeCampare(a.name)); //Reverse alphabetical
    // fruits.sort((a,b)=>a.cal - b.cal); // Numeric
    // fruits.sort((a,b)=>b.cal - a.cal); //Reverse Numeric 

    // // const lowFruit = fruits.filter(fruit => fruit.cal < 100);
    // const highFruit = fruits.filter(fruit => fruit.cal >= 100)
    const itemList = props.items;
    const catory = props.catagory;

    // const listItems = fruits.map(highFruit => <li key={highFruit.id}>{highFruit.name} &nbsp;{highFruit.cal}</li>);
    const listItems = itemList.map(item => <li key={item.id}>{item.name} &nbsp;{item.cal}</li>);
  return (
    <div>
   <h2 className="catagory">{catory}</h2>
    <ol className="item">{listItems}</ol>
    </div>
  )
}

List.prototype = {
  catagory : PropTypes.string,
  items : PropTypes.arrayOf(PropTypes.shape({
id : PropTypes.number,
name : PropTypes.string,
cal : PropTypes.number

  }))
}

List.defaultProps = {

  catagory : "Catagory",
  items : []
}

export default List
