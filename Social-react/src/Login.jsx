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
      // .then (Response => {
      //   setAuth(tokenData);
      //   navigate('/get-messages')
      // })
      // .catch(error => {
      //   setErrorMessage('Login failed, Try again.')
      //   console.log('ERRRRRRRR!!!!: ', error)
      // })
  }

  // const gotToMessages =()=>{
  //   navigate("/messageList");
  // }

  const handleClick=() => {
    submit()

  }


  return (
    <div className="p-5">

      <h1>Login</h1>
      <p>Welcome, Log in here and let's Par-tay!</p>
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
        <button onClick={handleClick}>See your Messages!</button>
        {/* <button onClick={() => gotToNewPage()} className="btn">See your messages!</button> */}
      </div>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

      <hr />

    </div>
  )
}

export default Login
