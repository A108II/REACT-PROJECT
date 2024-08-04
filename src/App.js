import logo from './logo.svg';
import './App.css';

function App() {
  const handleRandomNames = () => {
    const name = ['Jamie', 'Dwayne', 'Chris'];
    const int = Math.floor(Math.random() * 3);
    return name[int];
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to see loading.
        </p>
        
        {<p>Hi, {handleRandomNames()}</p>}
      </header>
    </div>
  );
}

export default App;
