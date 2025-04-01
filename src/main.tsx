// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  // Import file CSS
import App from './App.tsx'  // Import App component

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />  {/* Render component App */}
  </StrictMode>,
)
