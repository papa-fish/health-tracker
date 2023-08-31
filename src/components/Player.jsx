import PlusButton from "./PlusButton";
import MinusButton from "./MinusButton";

export default function Player({ bkc, hp, setHp, maxHp, setMaxHp }) {

    return (
        <div className="player">
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
                    style={{ background: bkc }} 
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
