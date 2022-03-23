import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import ItemList from './components/ItemListContainer/ItemList';


function App() {

  return (
    <>
    <NavBar />
    <div className="App">
      
      <ItemList />
      
     
    </div>
    
    </>
  );
}

export default App;
