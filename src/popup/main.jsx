import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import '../styles/tailwind.css'

console.log('main.jsx');

const root = document.getElementById('root')
if (root) {
  createRoot(root).render(
    <React.StrictMode>
       <App />
    </React.StrictMode>
  )
}