import "./User.css";

const User = ({ user }) => {
    
    return (
        <div className="user-div">
            <input
                className="added-user"
                placeholder={`${user.userName}(${user.age} years old)`}
            />
        </div>
    );
};

export default User;
