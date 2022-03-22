import './User.css';

const User = ({user}) => {
    console.log(user, ' :in the user')
    return(
    <div className='user-div'>
        <input className='added-user' placeholder={`${user.userName}(${user.age} years old)`}></input>
    </div>
    );
}

export default User;