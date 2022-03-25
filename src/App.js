import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './components/Shop/Shop';
import Bonus from './components/Bonus/Bonus';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Bonus></Bonus>
    </div>
  );
}

export default App;
