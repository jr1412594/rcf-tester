import './Invalid.css';

const Invalid = ({confirmInvalid}) => {

    return(
        <div className='invalid-container'>
            <div className='invalid-header'>
                <h3>INVALID INPUT!</h3>
            </div>
            <div className='invalid-text'>
                <p>This must be a valid name</p>
                <button onClick={ confirmInvalid }>Confirm</button>
            </div>
        </div>
    );
}

export default Invalid;