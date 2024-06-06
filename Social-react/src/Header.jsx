import { Link, useLocation  } from "react-router-dom"

function Header() {

  const location = useLocation();

  if (location.pathname === '/get-messages') {
    return null; // Don't render the header on the message-list page
  }

  return (
    <div style={{ margin: 10, display: 'flex', justifyContent: 'flex-end', fontSize: '20px' }}>
      <Link style={{ marginRight: 20, color: 'white' }} to='/'>Home</Link>
      <Link style={{ marginRight: 20, color: 'white' }} to='create-user/'>New User?</Link>
    </div>
  )
}

export default Header