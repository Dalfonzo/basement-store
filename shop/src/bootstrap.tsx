import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routes from './routes'

createRoot(document.querySelector('#shop_root')!).render(
  <BrowserRouter>
    <Routes>
      {routes.map((route, key) => (
        <Route {...route} key={key} />
      ))}
    </Routes>
  </BrowserRouter>
)
