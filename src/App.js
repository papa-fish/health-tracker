import { useContext } from 'react';
import './App.css';
import AttackComponent from './components/AttackComponent';
import BlockComponent from './components/BlockComponent';
import Player from './components/Player';
import { nanoid } from 'nanoid';
import { HealthTrackerContext } from './healthTrackerContext';
import EndPhaseButton from './components/EndPhaseButton';
import resetImg from './assets/arrow-counterclockwise.svg'

export default function App() {

  const { 
    showOverlay,
    handleReset,
    playerColors,
    playerOneCurrentHp,
    setPlayerOneCurrentHp,
    playerTwoCurrentHp,
    setPlayerTwoCurrentHp,
    playerOneMaxHp,
    setPlayerOneMaxHp,
    playerTwoMaxHp,
    setPlayerTwoMaxHp,
    showEndPhaseButton1,
    showEndPhaseButton2,
    currentPlayer
   } = useContext(HealthTrackerContext);

  return (
    <div className="App">

      <div className='content'>
      {showOverlay && (
        <div className="overlay">
            <button className="reset-btn" onClick={handleReset}><img className="reset-btn" src={resetImg} alt="" /></button>
        </div>
      )}
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
          {showEndPhaseButton1 && (
          <EndPhaseButton 
            bkc={playerColors.one} 
            id={1}
            isDisabled={false}
            />
          )}
          {currentPlayer === 2 && 
            <BlockComponent
              state={playerOneCurrentHp}
              setState={setPlayerOneCurrentHp}
            />
          }
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
          {showEndPhaseButton2 && (
          <EndPhaseButton 
            bkc={playerColors.two} 
            id={2} 
            isDisabled={true} 
            />
          )}
          {currentPlayer === 1 && 
            <BlockComponent 
            state={playerTwoCurrentHp} 
            setState={setPlayerTwoCurrentHp} 
            />
          }
        </div>
      </div>
    </div>
  );
}