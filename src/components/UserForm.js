import "./UserForm.css"

import { useState } from "react";

const UserForm = ({ addUser }) => {

    const [input, setInput] = useState({
        userName: '',
        age: ''
    });

    const handleChange = (event) => {
         setInput({...input, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addUser({...input, id: Math.random().toString()})
        setInput({userName: '', age: ''})
    }


    return (
        <div className='form-div'>
            <form className='form'onSubmit={handleSubmit}>
                <div className='user-name-input'>
                    <label className='label' htmlFor="name-input">Username</label>
                    <input className='name-input' value={input.userName} name='userName' type='text' onChange={handleChange}/>
                </div>
                <div className='user-age-input'>
                    <label className='label' htmlFor="age-input">Age(Years)</label>
                    <input className='age-input' value={input.age} name='age' type='number' onChange={handleChange}/>
                </div>
                <div className='button-div'>
                    <button type='submit'>Add User</button>
                </div>
            </form>
        </div>
    );
}

export default UserForm;