import { useContext } from 'react';
import './App.css';
import AttackComponent from './components/AttackComponent';
import BlockComponent from './components/BlockComponent';
import Player from './components/Player';
import { nanoid } from 'nanoid';
import { HealthTrackerContext } from './healthTrackerContext';
import EndPhaseButton from './components/EndPhaseButton';

export default function App() {

  const { 
    playerColors,
    playerOneCurrentHp,
    setPlayerOneCurrentHp,
    playerTwoCurrentHp,
    setPlayerTwoCurrentHp,
    playerOneMaxHp,
    setPlayerOneMaxHp,
    playerTwoMaxHp,
    setPlayerTwoMaxHp,
   } = useContext(HealthTrackerContext);

  return (
    <div className="App">

      <div className='content'>
        <div className='player-one-component'>
          <AttackComponent />
          <Player
            key={nanoid()} 
            bkc={playerColors.one} 
            hp={playerOneCurrentHp}
            setHp={setPlayerOneCurrentHp}
            maxHp={playerOneMaxHp}
            setMaxHp={setPlayerOneMaxHp}
            />
          <EndPhaseButton 
            bkc={playerColors.one} 
            id={1}
            isDisabled={false}
            />
        </div>

        
        <hr />


        <div className='player-two-component'>
          <AttackComponent />
          <Player 
            key={nanoid()} 
            bkc={playerColors.two}
            hp={playerTwoCurrentHp}
            setHp={setPlayerTwoCurrentHp}
            maxHp={playerTwoMaxHp}
            setMaxHp={setPlayerTwoMaxHp}
            />
            <BlockComponent />
          {/* <EndPhaseButton 
            bkc={playerColors.two} 
            id={2} 
            isDisabled={true} 
            /> */}
        </div>
      </div>
    </div>
  );
}