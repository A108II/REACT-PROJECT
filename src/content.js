
import { useState } from "react";
const Content = () => {
  // name = current state
  // setName = updated state
  // useState('Darwin) = default state
 const [name, setName] = useState('Darwin');
 const [count, setcount] = useState(0);
 const [cityName, setCityName] = useState('Tabriz');

 const handleCityNames = () => {
  const cities = ['Tabriz', 'Tehran', 'Masal', 'Urmiyah'];
  const index = Math.floor(Math.random() * 4)
  setCityName(cities[index]);
 }
  const handleRandomNames = () => {
    const name = ['Jamie', 'Dwayne', 'Chris'];
    const int = Math.floor(Math.random() * 3);
    setName(name[int]);
  }

  // setCount is asynchronous so logging the value of count happens before the update that's why we first see 0 value in terminal when clicking 
  const handleClick = () => {
    setcount(count + 1);
    console.log(count);
  }

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  }
  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  }

  return (
    <main>
      <p>
        Hello {name}
      </p>

      <p>
        City: {cityName}
      </p>
      {/* 
      - If we put the operators (), the function gets called immediately without clicking the button
      - Anonymous function () => {} only gets called after the onclick and function inside which is handleClick2('Hulk')immediately gets called.
      */}
      <button onClick={handleCityNames}>City names</button>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleRandomNames}>Change name</button>
      <button onClick={() => handleClick2('Hulk')}>Click</button>
      {/* Acceessing event object when clicking event */}
      <button onClick={(e) => handleClick3(e)}>Click</button>
    </main>
  )
}

export default Content