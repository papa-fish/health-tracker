import { useContext } from "react";
import lowicon from "../assets/lowicon.svg";
import midicon from "../assets/midicon.svg";
import highicon from "../assets/highicon.svg";
import damageicon from "../assets/damageicon.svg";
import { HealthTrackerContext } from "../healthTrackerContext";
import PlusButton from "./PlusButton";
import MinusButton from "./MinusButton";

export default function AttackComponent() {

    const { 
        toggleAttackZone,
        playerOneCurrentHp,
        setPlayerOneCurrentHp,
        // playerTwoCurrentHp,
        // setPlayerTwoCurrentHp,
        showAttackZone,
        playerColors,
        attackDamage,
        setAttackDamage,
        attackSpeed,
        setAttackSpeed,
        handleHalfBlock,
        handleUnblocked
    } = useContext(HealthTrackerContext);

    return(
        <div className="attack-container">
            <div>
                <button onClick={toggleAttackZone} className="attack-zone-btn">
                    <span 
                        className="attack-zone" 
                        value={attackSpeed}
                        >
                        {attackSpeed}
                    </span>
                    {showAttackZone === 0 ? (
                        <img src={midicon} alt="" />
                    ) : showAttackZone === 1 ? (
                        <img src={lowicon} alt="" />
                    ) : (
                        <img src={highicon} alt="" />
                    )}
                </button>
                <div className="speed-btn-container">
                    <PlusButton 
                        bkc={playerColors.two}
                        state={attackSpeed}
                        setState={setAttackSpeed}
                        />
                    <MinusButton
                        bkc={playerColors.two}
                        state={attackSpeed}
                        setState={setAttackSpeed}
                    />
                </div>
            </div>

            <div>
                <button className="attack-damage-btn">
                    <span 
                        className="attack-damage"
                        value={attackDamage} 
                    >{attackDamage}
                    </span>
                    <img src={damageicon} alt="" />
                </button>
                <div className="attack-btn-container">
                    <PlusButton 
                        bkc={playerColors.one}
                        state={attackDamage}
                        setState={setAttackDamage}
                    />
                    <MinusButton 
                        bkc={playerColors.one}
                        state={attackDamage}
                        setState={setAttackDamage}
                    />
                </div>
            </div>

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
        </div>
    );
};