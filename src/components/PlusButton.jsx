import { useContext } from "react";
import { HealthTrackerContext } from "../healthTrackerContext";

export default function PlusButton({ bkc, state, setState }) {
    const { incrementState } = useContext(HealthTrackerContext);

    return(
        <button
            onClick={() => incrementState(state, setState)}
            style={{ backgroundColor: bkc }}
            className="plus-btn"
        >
            +
        </button>
    );
}