import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "./context"
import { getToken } from "./api"

function Login() {
  const { auth } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();


  const submit = () => {
    getToken({ auth, username, password })
  
  }

 
  const handleClick=() => {
    submit();
    navigate('/get-messages')

  }


  return (
    <div className="p-5 container" style={{ textAlign: 'center', color: 'white'}}>

      <h1>Login</h1>
      <p>Heyyy, Log in and let's Par-tay!</p>
      <div>
        <div>Username:</div>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>

      <div>
        <div>Password:</div>
        <input
          type = "password"  //Hides the characters of the password!!!
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <div style={{ marginTop: 20 }}>
        <button onClick={handleClick} style={{ color: 'white', backgroundColor: 'teal', borderRadius: '10px'}}>See your Messages!</button>
   
      </div>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

      <hr />

    </div>
  )
}

export default Login
