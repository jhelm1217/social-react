// import UploadImage from './UploadImage'
import { Link } from "react-router-dom"
import CreateMessage from "./CreateMessage"
import CreateNewUser from "./CreateNewUser"
import Login from "./Login"



function App() {

  return (
   
    <div className="p-5">
      <h1 style={{ color: 'white', textAlign: 'center'}}>Hi! Lets Chat!</h1>
      <Link to='/login'>
        <button>Login Here!</button>
      </Link>
   
    </div>

  )
}

export default App

