import { createContext, useState } from "react";

export const HealthTrackerContext = createContext();

export function HealthTrackerProvider(props) {
    const [showAttackZone, setShowAttackZone] = useState(true);
    const [ attackDamage, setAttackDamage ] = useState(3);
    const [ attackSpeed, setAttackSpeed ] = useState(3);
    const [ playerOneCurrentHp, setPlayerOneCurrentHp ] = useState(25);
    const [ playerTwoCurrentHp, setPlayerTwoCurrentHp ] = useState(25);
    const [ playerOneMaxHp, setPlayerOneMaxHp ] = useState(25);
    const [ playerTwoMaxHp, setPlayerTwoMaxHp ] = useState(25);

    const playerColors = {
        one: "var(--red-color)",
        two: "var(--blue-color)"
    }

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

    const handleHalfBlock = (damage, state, setState) => {
        setState(Math.ceil(state - damage / 2))
        setAttackDamage(3);
        setAttackSpeed(3);
    };
    
    const handleUnblocked = (damage, state, setState) => {
        setState(state - damage);
        setAttackDamage(3);
        setAttackSpeed(3);
    };
    
    const value = {
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
        handleHalfBlock,
        handleUnblocked
    };

    return(
        <HealthTrackerContext.Provider value={value}>
            {props.children}
        </HealthTrackerContext.Provider>
    );
};