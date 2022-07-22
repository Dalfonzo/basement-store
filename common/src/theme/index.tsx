import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme, theme } from '@chakra-ui/react'
import styles from './styles'
import Fonts from './foundations/fonts'

const customTheme = {
  ...theme,
  fonts: {
    heading: 'basement-grotesque',
    body: 'basement-grotesque',
    text: 'basement-grotesque',
  },
  styles,
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <ChakraProvider theme={extendTheme(customTheme)}>
    <Fonts />
    {children}
  </ChakraProvider>
)
