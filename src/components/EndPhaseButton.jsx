export default function EndPhaseButton({ bkc }) {
    return(
        <div className="end-phase">
            <button 
                className="end-phase-btn"
                style={{ backgroundColor: bkc }}
                >
                End Phase
            </button>
        </div>
    );
};