import "./Invalid.css";

const Invalid = ({ confirmInvalid, message }) => {
    return (
        <div className="invalid-container">
            <div className="invalid-header">
                <h3>INVALID INPUT!</h3>
            </div>
            <div className="invalid-text">
                <p>{message}</p>
                <button onClick={confirmInvalid}>Confirm</button>
            </div>
        </div>
    );
};

export default Invalid;
