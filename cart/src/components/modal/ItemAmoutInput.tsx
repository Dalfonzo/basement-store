import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import useStore from '../../store'
import { StoreT } from 'common/src/types'

const ItemAmountInput = ({ value, itemId }: { value: number; itemId: number }) => {
  const increaseItemAmount = useStore((state: StoreT) => state.increaseItemAmount)
  const decreaseItemAmount = useStore((state: StoreT) => state.decreaseItemAmount)

  return (
    <Box
      border={'1px solid white'}
      borderRadius="50px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="fit-content"
      fontSize={['0.69rem', '0.90rem', '1.10rem', '1.31rem']}
    >
      <Text
        onClick={() => decreaseItemAmount(itemId)}
        padding="0.2rem .6rem"
        _hover={{ cursor: 'pointer' }}
        fontSize="1.1em"
        lineHeight="1"
        userSelect="none"
      >
        -
      </Text>
      <Text
        border="none"
        maxWidth="30px"
        padding="0"
        textAlign="center"
        fontSize="1em"
        height="fit-content"
        userSelect="none"
      >
        {value}
      </Text>
      <Text
        onClick={() => increaseItemAmount(itemId)}
        padding="0.2rem .6rem"
        _hover={{ cursor: 'pointer' }}
        fontSize="1.1em"
        lineHeight="1"
        userSelect="none"
      >
        +
      </Text>
    </Box>
  )
}

export default ItemAmountInput
