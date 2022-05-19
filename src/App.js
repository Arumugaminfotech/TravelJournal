import logo from './logo.svg';
import './App.css';
import Data from './Data';
import Travel from './components/Travel';

function App() {
  return (
    <div className="App">
     <div className='header'><center> <h1>My Travel journal </h1></center></div>
    {
      Data.map((detail) => (
        <Travel detail={detail}/>
      ))
    }
    </div>
  );
}

export default App;
