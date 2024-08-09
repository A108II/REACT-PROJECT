const Content = () => {
  const handleRandomNames = () => {
    const name = ['Jamie', 'Dwayne', 'Chris'];
    const int = Math.floor(Math.random() * 3);
    return name[int];
  }

  const handleClick = () => {
    console.log('You clicked it');
  }
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  }
  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  }

  return (
    <main>
      <p onDoubleClick={handleClick}>
        Hello {handleRandomNames()}
      </p>
      {/* 
      - If we put the operators (), the function gets called immediately without clicking the button
      - Anonymous function () => {} only gets called after the onclick and function inside which is handleClick2('Hulk')immediately gets called.
      */}
      <button onClick={handleClick}>Click</button>
      <button onClick={() => handleClick2('Hulk')}>Click</button>
      {/* Acceessing event object when clicking event */}
      <button onClick={(e) => handleClick3(e)}>Click</button>
    </main>
  )
}

export default Content