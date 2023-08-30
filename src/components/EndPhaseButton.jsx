import { useContext } from "react";
import { HealthTrackerContext } from "../healthTrackerContext";

export default function EndPhaseButton({ bkc, id }) {

    const { activeButtonId, disableButton } = useContext(HealthTrackerContext);

    const isButtonActive = activeButtonId === id;
    const handleClick = () => {
        if (!isButtonActive) {
            disableButton(id);
        }
    };

    return (
        <div className="end-phase">
            <button
                className={`end-phase-btn ${isButtonActive ? 'active' : ''}`}
                disabled={isButtonActive}
                onClick={handleClick}
                style={{
                    backgroundColor: isButtonActive ? "var(--dark-grey-color)" : bkc,
                }}
            >
                End Phase
            </button>
        </div>
    );
};



