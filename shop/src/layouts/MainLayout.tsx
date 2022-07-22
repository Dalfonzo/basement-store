import React from 'react'
import { ThemeProvider } from 'common/Theme'
import Header from '../components/header'
import Footer from '../components/footer'

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider>
    <Header />
    {children}
    <Footer />
  </ThemeProvider>
)

export default MainLayout
