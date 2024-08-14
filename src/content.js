import { useState } from "react";
import {FaTrashAlt} from "react-icons/fa";
const Content = () => {
 const [items, setItems] = useState(
  [
    {
      id: 1,
      checked: true,
      item: "Apple"
    },

    {
      id: 2,
      checked: false,
      item: "Orange"
    },

    {
      id: 3,
      checked: false,
      item: "Banana"
    },
  ]);

  // Here map is a higher order function which takes a callback function as an argument, higher order function either take a function as an argument or return a function as its result 


  const handleCheck = (id) => {
    const dynamicItems = items.map((item) => (
      item.id === id ? {...item, checked: !item.checked} : item
    ))
    setItems(dynamicItems);
    localStorage.setItem('shoppingList', JSON.stringify(dynamicItems));
  }

  const handleDelete = (id) => {
    const dynamicItems = items.filter((item) => 
    item.id !== id
    )
    setItems(dynamicItems);
    localStorage.setItem('shoppingList' , JSON.stringify(dynamicItems));
  }
  
  return (
    <main>
    {items.length ? ( 
     <ul>
      {
        items.map((item) => (
          <li className="item" key={item.id}>
            
          <input
          type="checkbox"
          checked={item.checked}
          onChange={() => handleCheck(item.id)}
          />

          <label
          style={item.checked ? {textDecoration: 'line-through'} : null}
          onDoubleClick = {() => handleCheck(item.id)}
          >{item.item}
          </label>

          <FaTrashAlt 
          onClick={() => handleDelete(item.id)}
          role="button"
          tabIndex="0"/>
          </li>
        ))
      }
     </ul> 
    ) : (
      <p style={{marginTop: '2rem'}}>List is empty</p>
    )}
    </main>
  )
}


export default Content
