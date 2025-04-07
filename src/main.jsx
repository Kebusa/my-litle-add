import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './07exam/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
