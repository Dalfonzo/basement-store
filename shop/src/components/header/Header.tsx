import React from 'react'
import { Button, Flex, Image, Box, Text } from '@chakra-ui/react'
import Marquee from 'react-fast-marquee'
import Logo from '../../assets/svg/logo.svg'
import Decoration from '../../assets/svg/decoration.svg'
import HeaderLogo from '../../assets/svg/header.svg'
import Cart from 'cart/Cart'

const Header = () => {
  return (
    <Box as={'header'} padding="2rem 0">
      <Flex justifyContent="space-between" padding={'0 2rem'}>
        <Image src={Logo} alt="Logo" />
        <Image src={Decoration} alt="decoration" />
        <Cart />
      </Flex>
      <Image src={HeaderLogo} alt="Hero" width="100%" marginTop="3rem" padding={'0 2rem'} />
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
