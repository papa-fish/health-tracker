export default function AttackComponent() {
    return(
        <div className="attack-container">
            <div>speed</div>
            <div>damage</div>
            <div className="block-container">
                <button>unblocked</button>
                <button>half block</button>
                <button>full block</button>
            </div>
        </div>
    );
};