import React from 'react'
import { Global } from '@emotion/react'
import GrotesqueWoff2 from '../../assets/fonts/basement-grotesqueRegularRegular.woff2'
import GrotesqueWoff from '../../assets/fonts/basement-grotesqueRegularRegular.woff'

const Fonts = () => (
  <Global
    styles={`
        @font-face {
          font-family: 'basement-grotesque';
          src: url(${GrotesqueWoff2}) format('woff2'),
              url(${GrotesqueWoff}) format('woff');
          font-weight: 500;
          font-style: normal;
          font-display: swap;
      };
`}
  />
)

export default Fonts
