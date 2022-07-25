import React from 'react'
import { Box, AspectRatio } from '@chakra-ui/react'
import footer from '../../assets/svg/footer.svg'
import footerGlitch from '../../assets/svg/footer_glitch.svg'
import { glitch } from '../../shared/animation'

const Footer = () => {
  return (
    <Box as="footer" padding="2rem">
      <AspectRatio ratio={2.83} width="100%">
        <Box
          background={`url('${footer}')`}
          backgroundSize="100%"
          backgroundRepeat="no-repeat"
          position="relative"
          width="100%"
          marginTop="3rem"
          padding={'0 2rem'}
          _before={{
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: `url('${footerGlitch}')`,
            backgroundSize: '100%',
            opacity: 0,
            mixBlendMode: 'hard-light',
            backgroundRepeat: 'no-repeat',
          }}
          _hover={{
            _before: {
              animation: `${glitch} .5s linear infinite`,
            },
          }}
        />
      </AspectRatio>
    </Box>
  )
}

export default Footer
