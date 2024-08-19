import ListItems from "./listItems";
const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <> 
    { items.length ? 
    ( 
     <ListItems
     items = {items}
     handleCheck = {handleCheck}
     handleDelete = {handleDelete}
     />
    ) : (<p style={{marginTop: '2rem'}}>List is empty</p>)}
    </>
    )}

export default Content

// <> </> are called react fragments They allow to group multiple elements without adding an extra node to the DOM.

