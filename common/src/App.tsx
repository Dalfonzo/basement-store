import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import cartRoutes from 'cart/Routes'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import shopRoutes from 'shop/Routes'

const routes = [...cartRoutes, ...shopRoutes]

createRoot(document.getElementById('common_root')!).render(
  <BrowserRouter>
    <ChakraProvider>
      <Routes>
        {routes.map((route, key) => (
          <Route {...route} key={key} />
        ))}
      </Routes>
    </ChakraProvider>
  </BrowserRouter>
)
