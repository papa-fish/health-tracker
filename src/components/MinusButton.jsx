import { useContext } from "react";
import { HealthTrackerContext } from "../healthTrackerContext";

export default function MinusButton({ bkc, state, setState }) {
    const { decrementState } = useContext(HealthTrackerContext);

    return(
        <button
            onClick={()=> decrementState(state, setState)}
            style={{ backgroundColor: bkc }}
            className="minus-btn"
        >
            -
        </button>
    );
};