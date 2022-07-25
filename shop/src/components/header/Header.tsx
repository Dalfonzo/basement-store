import React from 'react'
import { Button, Flex, Image, Box, Text, AspectRatio, keyframes } from '@chakra-ui/react'
import Marquee from 'react-fast-marquee'
import Logo from '../../assets/svg/logo.svg'
import Decoration from '../../assets/svg/decoration.svg'
import HeaderLogo from '../../assets/svg/header.svg'
import HeaderLogoGlitch from '../../assets/svg/header_glitch.svg'
import { glitch } from '../../shared/animation'
import Cart from 'cart/Cart'

const Header = () => {
  return (
    <Box as={'header'} padding="2rem 0">
      <Flex justifyContent="space-between" padding={'0 2rem'}>
        <Image src={Logo} alt="Logo" />
        <Image src={Decoration} alt="decoration" />
        <Cart />
      </Flex>
      <AspectRatio ratio={3.53} width="100%">
        <Box
          background={`url('${HeaderLogo}')`}
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
            background: `url('${HeaderLogoGlitch}')`,
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
      <Marquee gradient={false} style={{ border: 'solid white', borderWidth: '1px 0px 1px 0px', margin: '3.5rem 0' }}>
        <Text fontSize="2.19rem" padding=".2em">
          A man can’t have enough base­ment swag  —  A man can’t have enough base­ment swag  —  A man can’t have enough
          base­ment swag  —  A man can’t have enough base­ment swag
        </Text>
      </Marquee>
    </Box>
  )
}

export default Header
