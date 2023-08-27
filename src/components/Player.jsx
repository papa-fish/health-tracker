export default function Player(props) {



    return(
        <div className="player">
            <button style={{backgroundColor: props.bkc}} className="hp">
                <input type="number" max={36} className="current-hp"></input>
                <hr className='hp-divider'/>
                <input type="number" max={36} className="max-hp"></input>
            </button>
            <div className="plus-minus-wrapper">
                <button style={{backgroundColor: props.bkc}} className="plus-btn">+</button>
                <button style={{backgroundColor: props.bkc}} className="minus-btn">-</button>
            </div>
        </div>
    );
};