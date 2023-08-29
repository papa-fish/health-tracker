// import { useState } from "react";

import PlusButton from "./PlusButton";
import MinusButton from "./MinusButton";
import EndPhaseButton from "./EndPhaseButton";

export default function Player({ bkc, hp, setHp, maxHp, setMaxHp }) {

    // const [ currentHp, setCurrentHp ] = useState(25);
    // const [ maxHp, setMaxHp ] = useState(25);

    return (
        <div className="player">
            <div className="hp-flex-container">
                <div style={{ backgroundColor: bkc }} className="current-hp-wrapper">
                    <p
                        value={hp}
                        className="current-hp"
                        >{hp}
                    </p>
                </div>
                <div style={{ backgroundColor: bkc }} className="max-hp-wrapper">
                    <p
                        value={maxHp}
                        className="max-hp"
                        >{maxHp}
                    </p>
                </div>
            </div>
            <div className="plus-minus-flex-container">
                <div className="plus-minus-wrapper">
                    <PlusButton 
                        bkc={bkc}
                        state={hp}
                        setState={setHp}
                        />
                    <MinusButton                     
                        bkc={bkc}
                        state={hp}
                        setState={setHp} 
                        />
                </div>
                <div className="plus-minus-wrapper">
                    <PlusButton 
                        bkc={bkc}
                        state={maxHp}
                        setState={setMaxHp}
                        />
                    <MinusButton                     
                        bkc={bkc}
                        state={maxHp}
                        setState={setMaxHp} 
                        />
                </div>
            </div>
            <EndPhaseButton bkc={bkc} />
        </div>
    );
}
