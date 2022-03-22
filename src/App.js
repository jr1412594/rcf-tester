import './App.css';
import { useState } from 'react';

import UserContainer from './components/UserContainer';
import UserForm from './components/UserForm';

function App() {

  const [userInfo, setUserInfo] = useState([]);

  const addUser = (userInput) => {
    setUserInfo((prevState) => {
      return [...prevState, userInput];
    })
  }

  return (
    <div className="App">
     <UserForm addUser={addUser}/>
     <UserContainer userInfo={userInfo} addUser={addUser}/>
    </div>
  );
}

export default App;
