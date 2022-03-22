import "./App.css";
import { useState } from "react";

import UserContainer from "./components/UserContainer";
import UserForm from "./components/UserForm";
import Invalid from "./components/Invalid";

function App() {
    const [userInfo, setUserInfo] = useState([]);
    const [isValid, setIsValid] = useState(true);

    const addUser = (userInput) => {
        setUserInfo((prevState) => {
            return [...prevState, userInput];
        });
    };

    const ifInvalid = (falseVariable) => {
        setIsValid(falseVariable);
    };

    const confirmInvalid = () => {
        setIsValid(true);
    };

    const showUsers =
        userInfo.length > 0 ? (
            <UserContainer userInfo={userInfo} addUser={addUser} />
        ) : (
            ""
        );

    const alerting = !isValid && <Invalid confirmInvalid={confirmInvalid} />;

    return (
        <div className="App">
            <UserForm addUser={addUser} ifInvalid={ifInvalid} />
            {alerting}
            {showUsers}
        </div>
    );
}

export default App;
