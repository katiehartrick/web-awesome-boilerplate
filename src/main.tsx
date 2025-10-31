import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@awesome.me/webawesome/dist/styles/themes/default.css'
import '@awesome.me/webawesome/dist/styles/utilities.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
