import ListItems from "./listItems";
const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <>
      {items.length ?
        (
          <ListItems
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ) : (<p style={{ marginTop: '2rem' }}>List is empty</p>)}
    </>
  )
}

export default Content