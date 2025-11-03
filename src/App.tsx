import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app wa-stack wa-align-items-stretch">
        <Navigation />
        <main className="wa-stack wa-align-items-stretch">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
