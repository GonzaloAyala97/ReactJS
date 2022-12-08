import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import Navbar from './components/navbar';
import ItemListContainer from './components/listcontainer';

function App() {
  const onHandlerClick =() =>{
    alert("hellow");
  }
  return (
    <div className="App">
      
        <Navbar />
        <ItemListContainer />
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button text='hola' onHandlerClick={onHandlerClick} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
