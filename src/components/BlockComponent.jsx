import { useContext } from "react";
import { HealthTrackerContext } from "../healthTrackerContext";

export default function BlockComponent({ state, setState }) {
    const { 
        attackDamage,
        handleFullBlock,
        handleHalfBlock,
        handleUnblocked } = useContext(HealthTrackerContext);
    return(
        <div className="block-container">
            <button 
                onClick={() => handleUnblocked(attackDamage, state, setState)}
                className="block-btn" 
                id="unblocked"
                >
                <label>UNBLOCKED</label>
                <p className="damage">{attackDamage}</p>
            </button>
            <button 
                onClick={() => handleHalfBlock(attackDamage, state, setState)}
                className="block-btn" 
                id="half-block"
                >
                <label>HALF BLOCK</label>
                <p className="damage">{Math.ceil(attackDamage / 2)}</p>
            </button>
            <button
                onClick={handleFullBlock} 
                className="block-btn" 
                id="full-block"
                >
                <p> FULL BLOCK</p>
                <p className="damage">{attackDamage * 0}</p>
            </button>
        </div>
    );
};