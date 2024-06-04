import React, { useContext, useState } from "react"
import { AuthContext } from "./context"
import { getToken } from "./api"


function Login() {
  const { auth } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const submit = () => {
    getToken({ auth, username, password })


  }

  return (
    <div className="p-5">

      <h1>Login</h1>
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
        //   type = "password"  //Hides the characters of the password!!!
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <div style={{ marginTop: 20 }}>
        <button onClick={() => submit()}>Submit</button>
      </div>

      <hr />

    </div>
  )
}

export default Login
