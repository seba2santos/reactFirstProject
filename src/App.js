import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/ItemListContainer/Cards';


function App() {

  return (
    <>
    <NavBar />
    <div className="App">
      <Card greeting = {'Este es mi título de la sección de productos' } />
     
    </div>
    
    </>
  );
}

export default App;
