import PlusButton from "./PlusButton";
import MinusButton from "./MinusButton";
import { useContext } from "react";
import { HealthTrackerContext } from "../healthTrackerContext";

export default function Player({ bkc, hp, setHp, maxHp, setMaxHp }) {

    const { calculateHpPercentage } = useContext(HealthTrackerContext);

    const containerStyle = {
        height: '100%',
        background: `linear-gradient(to top, ${bkc} ${calculateHpPercentage(hp, maxHp)}%, transparent ${calculateHpPercentage(hp, maxHp)}%)`,
      };

    return (
        <div className="player"
            style={containerStyle}>
            <div className="hp-flex-container">
                <div className="current-hp-plus-minus-wrapper">
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

                <div 
                    className="hp-wrapper"
                >
                    <div className="hp-label">
                        <label className="hp-status">CURRENT</label>
                        <p
                            value={hp}
                            className="hp"
                        >
                            {hp}
                        </p>
                    </div>
                    <div className="hp-label">
                        <label className="hp-status">MAX</label>
                        <p
                            value={maxHp}
                            className="hp"
                        >
                            {maxHp}
                        </p>
                    </div>
                </div>

                
                <div className="max-hp-plus-minus-wrapper">
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
        </div>
    );
}
