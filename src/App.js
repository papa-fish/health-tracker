import { useContext } from 'react';
import './App.css';
import AttackComponent from './components/AttackComponent';
import Player from './components/Player';
import { nanoid } from 'nanoid';
import { HealthTrackerContext } from './healthTrackerContext';

function App() {

  const { 
    playerColors,
    playerOneCurrentHp,
    setPlayerOneCurrentHp,
    // playerTwoCurrentHp,
    // setPlayerTwoCurrentHp,
    playerOneMaxHp,
    setPlayerOneMaxHp,
    // playerTwoMaxHp,
    // setPlayerTwoMaxHp
   } = useContext(HealthTrackerContext);

  return (
    <div className="App">

      
      <div className='content'>
        <Player 
          key={nanoid()} 
          bkc={playerColors.one} 
          hp={playerOneCurrentHp}
          setHp={setPlayerOneCurrentHp}
          maxHp={playerOneMaxHp}
          setMaxHp={setPlayerOneMaxHp}
          />
        <AttackComponent />
        {/* <Player key={nanoid()} bkc={playerColors.two} /> */}
      </div>

    </div>
  );
}

export default App;
