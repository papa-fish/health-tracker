import { useState } from "react";

export default function Player(props) {
    const [currentHp, setCurrentHp] = useState(0);
    const [maxHp, setMaxHp] = useState(25);
    const [lastSelectedField, setLastSelectedField] = useState(null);

    const handleValueChange = (field, value) => {
        if (field === "currentHp") {
            setCurrentHp(value);
            setLastSelectedField("currentHp");
        } else if (field === "maxHp") {
            setMaxHp(value);
            setLastSelectedField("maxHp");
        }
    };

    const plusButton = () => {
        if (lastSelectedField === "currentHp") {
            setCurrentHp(currentHp + 1);
        } else if (lastSelectedField === "maxHp") {
            setMaxHp(maxHp + 1);
        }
    };

    const minusButton = () => {
        if (lastSelectedField === "currentHp") {
            setCurrentHp(currentHp - 1);
        } else if (lastSelectedField === "maxHp") {
            setMaxHp(maxHp - 1);
        }
    };

    return (
        <div className="player">
            <button style={{ backgroundColor: props.bkc }} className="hp">
                <input
                    name="current-hp"
                    value={currentHp}
                    onChange={e => handleValueChange("currentHp", parseInt(e.target.value))}
                    onFocus={() => setLastSelectedField("currentHp")}
                    type="number"
                    max={36}
                    className="current-hp"
                />

                <hr className='hp-divider' />

                <input
                    name="maximum-hp"
                    value={maxHp}
                    onChange={e => handleValueChange("maxHp", parseInt(e.target.value))}
                    onFocus={() => setLastSelectedField("maxHp")}
                    type="number"
                    max={36}
                    className="max-hp"
                />
            </button>

            <div className="plus-minus-wrapper">
                <button
                    onClick={plusButton}
                    style={{ backgroundColor: props.bkc }}
                    className="plus-btn"
                >
                    +
                </button>

                <button
                    onClick={minusButton}
                    style={{ backgroundColor: props.bkc }}
                    className="minus-btn"
                >
                    -
                </button>
            </div>
        </div>
    );
}
