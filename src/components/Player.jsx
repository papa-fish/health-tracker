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
                    style={{background: bkc }} 
                    className="current-hp-wrapper"
                    >
                    <p
                        value={hp}
                        className="current-hp"
                        >{hp}
                    </p>
                    <br />
                    <p className="hp-status">current</p>
                </div>
                
                <div 
                    style={{ backgroundColor: bkc }} 
                    className="max-hp-wrapper"
                    >
                    <p
                        value={maxHp}
                        className="max-hp"
                        >{maxHp}
                    </p>
                    <br />
                    <p className="hp-status">max</p>
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
