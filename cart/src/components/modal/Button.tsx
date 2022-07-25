import React from 'react'
import { Button, useDisclosure } from '@chakra-ui/react'
import useStore from '../../store'
import { StoreT } from 'common/src/types'

const ButtonComponent = () => {
  const { totalItems, onOpen } = useStore((state: StoreT) => ({
    totalItems: state.totalItems,
    onOpen: state.onOpen,
  }))

  return (
    <Button
      backgroundColor="black"
      border="1px solid white"
      _hover={{ background: 'white', color: 'black' }}
      borderRadius="50px"
      padding="0 2rem"
      fontSize="1.125rem"
      onClick={onOpen}
    >
      Cart ({totalItems})
    </Button>
  )
}

export default ButtonComponent
