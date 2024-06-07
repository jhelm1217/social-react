// import UploadImage from './UploadImage'
import { Link } from "react-router-dom"
import CreateMessage from "./CreateMessage"
import CreateNewUser from "./CreateNewUser"
import Login from "./Login"



function App() {

  return (
   
    // <div className="p-5">
    //   <h1 style={{ color: 'white', textAlign: 'center'}}>Hi! Lets Chat!</h1>
    //   <Link to='/login'>
    //     <button style={{ alignItems: 'center', textAlign: 'center' }}>Login Here!</button>
        
    //   </Link>
   
    // </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '300px' }}>
      <h1 style={{ color: 'pink', textAlign: 'center'}}>Hi! Lets Chat!</h1>
      <Link to='/login'>
          <button style={{
            alignItems: 'center',
            backgroundColor: 'teal',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px' // Add some margin to space it from the heading
          }}>
            Login Here!
          </button>
        </Link>
      </div>

  )
}

export default App

