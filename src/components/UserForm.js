import "./UserForm.css";

import { useState } from "react";

const UserForm = ({ addUser, ifInvalid, cssHandling, setMessage }) => {
    const [input, setInput] = useState({
        userName: "",
        age: "",
    });

    const handleChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (input.userName.trim().length === 0) {
            ifInvalid(false);
            setMessage("Enter a valid name");
        } else if (input.age < 0 || input.age.trim() === "") {
            ifInvalid(false);
            setMessage("Enter a valid age");
        } else {
            addUser({ ...input, id: Math.random().toString() });
            setInput({ userName: "", age: "" });
        }
    };

    return (
        <div className={"form-div" + cssHandling}>
            <form className="form" onSubmit={handleSubmit}>
                <div className="user-name-input">
                    <label className="label" htmlFor="name-input">
                        Username
                    </label>
                    <input
                        className="name-input"
                        value={input.userName}
                        name="userName"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
                <div className="user-age-input">
                    <label className="label" htmlFor="age-input">
                        Age(Years)
                    </label>
                    <input
                        className="age-input"
                        value={input.age}
                        name="age"
                        type="number"
                        onChange={handleChange}
                    />
                </div>
                <div className="button-div">
                    <button type="submit">Add User</button>
                </div>
            </form>
        </div>
    );
};

export default UserForm;
