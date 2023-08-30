import { useContext } from "react";
import { HealthTrackerContext } from "../healthTrackerContext";

export default function BlockComponent() {
    const { 
        attackDamage,
        playerOneCurrentHp,
        setPlayerOneCurrentHp,
        // playerTwoCurrentHp,
        // setPlayerTwoCurrentHp,
        handleHalfBlock,
        handleUnblocked } = useContext(HealthTrackerContext);
    return(
        <div className="block-container">
            <button 
                onClick={() => handleUnblocked(attackDamage, playerOneCurrentHp, setPlayerOneCurrentHp)}
                className="block-btn" 
                id="unblocked"
                >
                <p>UNBLOCKED</p>
                <p className="damage">{attackDamage}</p>
            </button>
            <button 
                onClick={() => handleHalfBlock(attackDamage, playerOneCurrentHp, setPlayerOneCurrentHp)}
                className="block-btn" 
                id="half-block"
                >
                <p>HALF BLOCK</p>
                <p className="damage">{Math.ceil(attackDamage / 2)}</p>
            </button>
            <button className="block-btn" id="full-block">
                <p> FULL BLOCK</p>
                <p className="damage">{attackDamage * 0}</p>
            </button>
        </div>
    );
};