import { createContext } from "react";

export const HealthTrackerContext = createContext();

export function HealthTrackerProvider(props) {
    
    const value = {

    };

    return(
        <HealthTrackerContext.Provider value={value}>
            {props.children}
        </HealthTrackerContext.Provider>
    );
};