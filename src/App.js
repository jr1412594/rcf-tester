import "./App.css";
import { useState } from "react";

import UserContainer from "./components/UserContainer";
import UserForm from "./components/UserForm";
import Invalid from "./components/Invalid";

function App() {
    const [userInfo, setUserInfo] = useState([]);
    const [isValid, setIsValid] = useState(true);
    const [message, setMessage] = useState("");

    const addUser = (userInput) => {
        setUserInfo((prevState) => {
            return [...prevState, userInput];
        });
    };

    const ifInvalid = (falseVariable) => {
        setIsValid(falseVariable);
        setMessage("error");
    };

    const confirmInvalid = () => {
        setIsValid(true);
    };

    const cssHandling = isValid ? "" : "-invalid";

    const showUsers =
        userInfo.length > 0 ? (
            <UserContainer
                userInfo={userInfo}
                addUser={addUser}
                cssHandling={cssHandling}
            />
        ) : (
            ""
        );

    const alerting = !isValid && (
        <Invalid confirmInvalid={confirmInvalid} message={message} />
    );

    return (
        <div className="App" onClick={confirmInvalid}>
            <UserForm
                addUser={addUser}
                ifInvalid={ifInvalid}
                cssHandling={cssHandling}
                setMessage={setMessage}
            />
            {alerting}
            {showUsers}
        </div>
    );
}

export default App;
