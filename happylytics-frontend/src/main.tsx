import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    <head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/index.css" />
      <title>Vite App</title>
    </head>
    <StrictMode>
      <App />
    </StrictMode>,
  </>
)
