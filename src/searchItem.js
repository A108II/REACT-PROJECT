

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>

      <label htmlFor="searchItem">Search Item</label>

      <input
        type="text"
        id="searchItem"
        role="searchbox"
        placeholder="Search Items Now!"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    </form>
  )
}

export default SearchItem
