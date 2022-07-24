import React from 'react'
import { Box, Image, Text, AspectRatio } from '@chakra-ui/react'
import useStore from '../../store'
import { StoreT, ProductI } from 'common/src/types'

const ProductCard = ({ data }: { data: ProductI }) => {
  const addItem = useStore((state: StoreT) => state.addItem)

  return (
    <Box onClick={() => addItem(data)}>
      <AspectRatio bgGradient={'linear-gradient(0deg, #1D1D1D 0%, rgba(21, 21, 21, 0) 100%)'} maxW="100%" ratio={0.7}>
        <Image src={data.image} alt={data.name} />
      </AspectRatio>
      <Text
        as="p"
        display="flex"
        justifyContent="space-between"
        borderTop="2px solid white"
        fontSize="1.3rem"
        padding="0.5rem 0"
      >
        {data.name} <Text as="span">${data.price}</Text>
      </Text>
    </Box>
  )
}

export default ProductCard
