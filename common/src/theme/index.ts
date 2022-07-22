import { extendTheme, theme } from '@chakra-ui/react'
import styles from './styles'

const customTheme = {
  ...theme,
  fonts: {
    heading: 'basement-grotesque',
    body: 'basement-grotesque',
    text: 'basement-grotesque',
  },
  styles,
}

export default extendTheme(customTheme)
