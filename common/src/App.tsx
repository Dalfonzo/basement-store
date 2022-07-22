import React from 'react'
import { ThemeProvider } from './theme'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import shopRoutes from 'shop/Routes'
import cartRoutes from 'cart/Routes'

const routes = [...cartRoutes, ...shopRoutes]

createRoot(document.getElementById('common_root')!).render(
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        {routes.map((route, key) => (
          <Route {...route} key={key} />
        ))}
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
)
