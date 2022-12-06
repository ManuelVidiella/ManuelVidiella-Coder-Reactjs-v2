import logo from './imgs/logo.png';
import './App.css';
import Navbar from './componentes/Navbar';
import ItemListConteiner from './componentes/ItemListConteiner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul className='listH'>
          <li>
            <img src={logo} className="App-logo" alt="logo" />
          </li>
          <li>
          <Navbar/>
          </li>
        </ul>
      </header>
      <ItemListConteiner/>
    </div>
  );
}

export default App;

