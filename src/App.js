import {useState} from 'react'
import SearchItem from './searchItem'
import Header from './header';
import Content from './content';
import Footer from './footer';
import AddItem from './addItem';

function App() {

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('shoppingList'))
    );

    const [newItem, setNewItem] = useState('');
    const [search, setSearch] = useState('');

    const setAndSave = (newItems) => {
      setItems(newItems);
      localStorage.setItem('shoppingList', JSON.stringify(newItems));
    }

    const addItem = (item) => {
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      const myNewItem = {id, checked:false, item};
      const listItems = [...items, myNewItem];
      setAndSave(listItems);
    }

    const handleCheck = (id) => {
      const listItems = items.map((item) => (
        item.id === id ? {...item, checked: !item.checked} : item
      ))
      setAndSave(listItems);
    }
  
    const handleDelete = (id) => {
      const listItems = items.filter((item) => 
      item.id !== id
      )
      setAndSave(listItems);
    }

    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent page reload
      if(!newItem ) return; // If newItem is not provided then exit
      addItem(newItem);
      setNewItem('');
     
    }

  return (
    <div className="App">
      <Header title="Groceries List" />

      <AddItem 
      newItem = {newItem}
      setNewItem = {setNewItem}
      handleSubmit = {handleSubmit}
      />

      <SearchItem
      search = {search}
      setSearch = {setSearch}
      />

      <Content 
      items = {items.filter((item) => (
        ((item.item).toLowerCase()).includes((search).toLowerCase())
      ))}

      handleCheck = {handleCheck}
      handleDelete = {handleDelete}
      />

      <Footer length = {items.length} />
    </div>
  );
}

export default App;
