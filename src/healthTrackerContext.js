import { createContext, useState, useEffect } from "react";

export const HealthTrackerContext = createContext();

export function HealthTrackerProvider(props) {
    const [ showOverlay, setShowOverlay ] = useState(false);
    const [ currentPlayer, setCurrentPlayer ] = useState(1);
    const [ showEndPhaseButton1, setShowEndPhaseButton1 ] = useState(true);
    const [ showEndPhaseButton2, setShowEndPhaseButton2 ] = useState(false);
    const [ showAttackZone, setShowAttackZone ] = useState(true);
    const [ attackDamage, setAttackDamage ] = useState(4);
    const [ attackSpeed, setAttackSpeed ] = useState(4);
    const [ playerOneCurrentHp, setPlayerOneCurrentHp ] = useState(25);
    const [ playerTwoCurrentHp, setPlayerTwoCurrentHp ] = useState(25);
    const [ playerOneMaxHp, setPlayerOneMaxHp ] = useState(25);
    const [ playerTwoMaxHp, setPlayerTwoMaxHp ] = useState(25);

    const playerColors = {
        one: "var(--red-color)",
        two: "var(--blue-color)"
    };

    useEffect(() => {
        if (playerOneCurrentHp <= 0 || playerTwoCurrentHp <= 0) {
            setShowOverlay(true);
        }
    }, [playerOneCurrentHp, playerTwoCurrentHp]);

    const handleReset = () => {
        setShowOverlay(false);
        setPlayerOneCurrentHp(playerOneMaxHp);
        setPlayerTwoCurrentHp(playerTwoMaxHp);
    };

    const toggleAttackZone = () => {
        if (showAttackZone === 0) {
            setShowAttackZone(1);
        } else if (showAttackZone === 1) {
            setShowAttackZone(2);
        } else {
            setShowAttackZone(0);
        }
    };

    const incrementState = (currentState, setState) => {
        setState(currentState + 1);
    };

    const decrementState = (currentState, setState) => {
        setState(currentState - 1);
    };

    const handleFullBlock = () => {
        setAttackDamage(4);
        setAttackSpeed(4);
    };

    const handleHalfBlock = (damage, state, setState) => {
        setState(Math.ceil(state - damage / 2))
        setAttackDamage(4);
        setAttackSpeed(4);
    };
    
    const handleUnblocked = (damage, state, setState) => {
        setState(state - damage);
        setAttackDamage(4);
        setAttackSpeed(4);
    };


    const handleEndPhaseClick = () => {
        if (currentPlayer === 1) {
          setShowEndPhaseButton1(false);
          setShowEndPhaseButton2(true);
          setCurrentPlayer(2);
        } else {
          setShowEndPhaseButton1(true);
          setShowEndPhaseButton2(false);
          setCurrentPlayer(1);
        }
      };
    
    const value = {
        showOverlay,
        handleReset,
        toggleAttackZone,
        playerOneCurrentHp,
        setPlayerOneCurrentHp,
        playerTwoCurrentHp,
        setPlayerTwoCurrentHp,
        playerOneMaxHp,
        setPlayerOneMaxHp,
        playerTwoMaxHp,
        setPlayerTwoMaxHp,
        showAttackZone,
        incrementState,
        decrementState,
        playerColors,
        attackDamage,
        setAttackDamage,
        attackSpeed,
        setAttackSpeed,
        handleFullBlock,
        handleHalfBlock,
        handleUnblocked,
        currentPlayer,
        handleEndPhaseClick,
        showEndPhaseButton1,
        showEndPhaseButton2
    };

    return(
        <HealthTrackerContext.Provider value={value}>
            {props.children}
        </HealthTrackerContext.Provider>
    );
};