import { createContext, useState } from "react";

export const HealthTrackerContext = createContext();

export function HealthTrackerProvider(props) {
    const [showAttackZone, setShowAttackZone] = useState(true);

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
    
    const value = {
        toggleAttackZone,
        showAttackZone,
        incrementState,
        decrementState,
        playerColors
    };

    return(
        <HealthTrackerContext.Provider value={value}>
            {props.children}
        </HealthTrackerContext.Provider>
    );
};