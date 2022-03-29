import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import ItemList from './components/ItemListContainer/ItemList';
import ItemDetail from './components/ItemDetail/ItemDetail';


function App() {

  return (
    <>
    <NavBar />
    
    <div className="App">
      <ItemList />
    </div>
      
    <ItemDetail />
      
     
    
    </>
  );
}

export default App;
