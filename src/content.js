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

// useEffect(() => {
//   const fetchItems = async () => {
//    try {
//      const response = await fetch(API_URL);
//      if (!response.ok) throw Error(
//        'Did Not Receive Expected Data'
//      )
//      const listItems = await response.json();
//      setItems(listItems);
//      setFetchError(null);
//    }
//    catch (err) {
//      setFetchError(err.message);
//    }
//    // Setting loading to false after page loads successfully
//    finally {
//      setIsLoading(false);
//    }
//  }
//  setTimeout(() => {
//    fetchItems()
//  }, 2000)
// }, [])