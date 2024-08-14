import ListItems from "./listItems";
const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
    { items.length ? 
    ( 
     <ListItems
     items = {items}
     handleCheck = {handleCheck}
     handleDelete = {handleDelete}
     />
    ) : (<p style={{marginTop: '2rem'}}>List is empty</p>)}
    </main>
    )}

export default Content
