import { Link } from "react-router-dom"

function Header() {
  return (
    <div style={{ margin: 10 }}>
      <Link style={{ marginRight: 20 }} to='/'>Home</Link>
      <Link style={{ marginRight: 20 }} to='create-user/'>New User?</Link>
      <Link style={{ marginRight: 20 }}to='/login'>Login</Link>
      <Link to='message/'>Your Messages</Link>
    </div>
  )
}

export default Header