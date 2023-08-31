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
        showAttackZone,
        playerColors,
        attackDamage,
        setAttackDamage,
        attackSpeed,
        setAttackSpeed,
    } = useContext(HealthTrackerContext);

    return(
        <div className="attack-container">
            <div>
                <button onClick={toggleAttackZone} className="attack-zone-btn">
                    <span 
                        className="attack-speed" 
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
            </div>

            <div>
                <button className="attack-damage-btn">
                    <span 
                        className="attack-damage"
                        value={attackDamage} 
                        >
                        {attackDamage}
                    </span>
                    <img src={damageicon} alt="" />
                </button>
            </div>

            <div className="plus-minus-flex-container">
                <div className="plus-minus-wrapper">
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
                <div className="plus-minus-wrapper">
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
        </div>
    );
};