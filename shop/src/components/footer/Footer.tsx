import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import footer from '../../assets/svg/footer.svg'

const Footer = () => {
  return (
    <Box as="footer" padding="2rem">
      <Image src={footer} width="100%" />
    </Box>
  )
}

export default Footer
