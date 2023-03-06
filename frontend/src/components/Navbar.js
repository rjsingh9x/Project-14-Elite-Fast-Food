import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  
  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>ELITE FAST FOOD</h1>
        </Link>
        <nav>

        {user.level === 1 && (
            <div>
              <Link>CLOCK IN/CLOCK OUT  </Link>
              <Link>INVENTORY </Link>
              <Link>EMPLOYEES </Link>
              <Link>SALES </Link>
              <Link>STORES </Link>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}

          {user.level === 2 && (
            <div>
              <Link>POS  </Link>
              <Link>ClockIn/ClockOut </Link>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
          

        </nav>
      </div>
    </header>
  )
}

export default Navbar