import { useLocation, useNavigate } from 'react-router-dom'
import { WaIcon, WaButton } from '@awesome.me/webawesome/dist/react'
import './Navigation.css'

function Navigation() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <nav className="navigation">
      <div className="nav-brand">
        <WaIcon name="rocket" />
        <span>Web Awesome Demo</span>
      </div>
      <ul className="nav-links">
        <li>
          <WaButton 
            variant={location.pathname === '/' ? 'brand' : 'neutral'}
            onClick={() => navigate('/')}
          >
            <WaIcon name="home" />
            Home
          </WaButton>
        </li>
        <li>
          <WaButton 
            variant={location.pathname === '/about' ? 'brand' : 'neutral'}
            onClick={() => navigate('/about')}
          >
            <WaIcon name="info-circle" />
            About
          </WaButton>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation