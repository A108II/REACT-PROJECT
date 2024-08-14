import Header from './header';
import Content from './content';
import Footer from './footer';
import {useState} from 'react'

function App() {

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
    <div className="App">
      <Header title="Groceries List" />
      <Content 
      items = {items} 
      handleCheck = {handleCheck}
      handleDelete = {handleDelete}
      />
      <Footer length = {items.length} />
    </div>
  );
}

export default App;
