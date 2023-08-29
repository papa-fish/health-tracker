import { useState } from "react";

import PlusButton from "./PlusButton";
import MinusButton from "./MinusButton";
import EndPhaseButton from "./EndPhaseButton";

export default function Player({ bkc }) {

    const [ currentHp, setCurrentHp ] = useState(25);
    const [ maxHp, setMaxHp ] = useState(25);

    return (
        <div className="player">
            <div className="hp-flex-container">
                <div style={{ backgroundColor: bkc }} className="current-hp-wrapper">
                    <p
                        value={currentHp}
                        className="current-hp"
                        >{currentHp}
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
                        state={currentHp}
                        setState={setCurrentHp}
                        />
                    <MinusButton                     
                        bkc={bkc}
                        state={currentHp}
                        setState={setCurrentHp} 
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
