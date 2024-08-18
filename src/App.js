import { useState, useEffect } from 'react'
import SearchItem from './searchItem'
import Header from './header';
import Content from './content';
import Footer from './footer';
import AddItem from './addItem';

function App() {

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('shoppingList')) || []);
    // [] causes the application to work smoothly and provide intial array for a new user to interact with
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  // Everytime component renders, useEffect will run by default, but if we add [](empty dependency array) as dependency it runs once at load times, useEffect() is an asynchronous function 
  // useEffect(() => {
  //   console.log('Inside useEffect');
  // }, [items]);

  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(items));
  },[items])

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => (
      item.id === id ? { ...item, checked: !item.checked } : item
    ))
    setItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) =>
      item.id !== id
    )
    setItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (!newItem) return; // If newItem is not provided then exit
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className="App">
      <Header title="Groceries List" />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <SearchItem
        search={search}
        setSearch={setSearch}
      />

      <Content
        items={items.filter((item) => (
          ((item.item).toLowerCase()).includes((search).toLowerCase())
        ))}

        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />

      <Footer length={items.length} />
    </div>
  );
}

export default App;


// npx json-server -p 3500 -w data/db.json: -p:port, -w:watch to start a json server
