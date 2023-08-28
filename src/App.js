import './App.css';
import AttackComponent from './components/AttackComponent';
import NavBar from './components/NavBar';
import Player from './components/Player';
import { nanoid } from 'nanoid';

function App() {
  return (
    <div className="App">

      <NavBar />
      
      <div className='content'>
        <Player key={nanoid()} bkc="var(--red-color)"/>
        <AttackComponent />
        <Player key={nanoid()}  bkc="var(--blue-color)"/>
      </div>

    </div>
  );
}

export default App;
