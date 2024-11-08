import { useState, useEffect } from 'react'
import SearchItem from './searchItem'
import Header from './header';
import Content from './content';
import Footer from './footer';
import AddItem from './addItem';
import apiRequest from './apiRequest';

function App() {
  const API_URL = 'http://localhost:3500/items';
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw Error('Could not access to resources');
        }
        const listItems = await response.json(); // parsing to javascript object
        setItems(listItems);
        setFetchError(null)
      }
      catch (err) {
        setFetchError(err.message);
      }

      finally {
        setIsLoading(false);
      }
    }
    setTimeout(() => {
      fetchItems();
    }, 1500);
  }, [])

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    };

    const result = await apiRequest(API_URL, postOptions);
    if (result !== null) setFetchError(result);
  }

  const handleCheck = async (id) => {
    const listItems = items.map((item) => (
      item.id === id ? { ...item, checked: !item.checked } : item
    ))
    setItems(listItems);

    const selectedItems = listItems.filter((item) => item.id === id)

    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ checked: selectedItems[0].checked })
    }
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result !== null) setFetchError(result);
  }

  const handleDelete = async (id) => {
    const listItems = items.filter((item) =>
      item.id !== id
    )
    setItems(listItems);

    const deleteOptions = {
      method: 'DELETE'
    }
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
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

      <main>
        {isLoading && <p>Loading ...</p>}
        {fetchError && <p style={{
          color: 'red',
          fontWeight: 800,
        }}>{`Error: ${fetchError}`}</p>}

        {!fetchError && !isLoading && <Content
          items={items.filter((item) => (
            ((item.item).toLowerCase()).includes((search).toLowerCase())
          ))}

          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        }
      </main>

      <Footer length={items.length} />
    </div>
  );
}

export default App;
