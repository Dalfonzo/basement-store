import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ThemeProvider } from 'common/Theme'

createRoot(document.querySelector('#cart_root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
