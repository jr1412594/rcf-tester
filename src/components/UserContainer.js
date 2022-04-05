import "./UserContainer.css";

import User from "./User";

const UserContainer = ({ userInfo, cssHandling }) => {
    const display = userInfo.map((user) => {
        return <User key={user.id} user={user} />;
    });

    return <div className={"container" + cssHandling}>{display}</div>;
};

export default UserContainer;
