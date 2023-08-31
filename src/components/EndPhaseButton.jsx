import { useContext } from "react";
import { HealthTrackerContext } from "../healthTrackerContext";

export default function EndPhaseButton({ bkc }) {

    const { handleEndPhaseClick } = useContext(HealthTrackerContext);


    return (
        <div className="end-phase">
            <button
                onClick={handleEndPhaseClick}
                className="end-phase-btn"
                style={{background: bkc}}
            >
                End Phase
            </button>
        </div>
    );
};



