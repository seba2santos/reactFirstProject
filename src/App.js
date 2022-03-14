import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Cards/Cards';


function App() {

  return (
    <>
    <NavBar />
    <div className="App">
    <Card title= { "I'm a card" } description= {'lorem ipsum dolot sit amet'} />
    <Card title= { "I'm a card" } description= {'lorem ipsum dolot sit amet'} />
    <Card title= { "I'm a card" } description= {'lorem ipsum dolot sit amet'} />
    <Card title= { "I'm a card" } description= {'lorem ipsum dolot sit amet'} />
    </div>
    
    </>
  );
}

export default App;
