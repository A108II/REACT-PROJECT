import React from 'react'
import {FaPlus} from 'react-icons/fa'
import {useRef} from 'react'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={handleSubmit}>

      <label htmlFor="addItem">Add Item</label>

      <input
      autoFocus
      ref = {inputRef}
      type="text"
      id="addItem"
      placeholder="Add item"
      value = {newItem}
      onChange={(e) => setNewItem(e.target.value)}
      // The value={newItem} and onChange={(e) => setNewItem(e.target.value)} together create a controlled input, making the state (newItem) the single source of truth. The input value being directly connected to the state ensures that both are always in sync. This consistent relationship between the input and the state is why we refer to the state as the "single source of truth." Any changes made to the input are immediately reflected in the state, maintaining a clear, centralized control over the data.
      />

      <button
      type='submit'
      aria-label='Add Item'
      onClick={() => inputRef.current.focus()}
      >
    
      <FaPlus />
      </button>

    </form>
  )
}

export default AddItem
