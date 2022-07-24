import React from 'react'
import { Box, Text, Image, AspectRatio } from '@chakra-ui/react'
import ItemAmoutInput from './ItemAmoutInput'
import SizesList from './SizesList'
import { ProductI } from 'common/src/types'

const ProductCard = ({ data }: { data: ProductI }) => {
  return (
    <Box border="1px solid white" width="100%" display="flex" padding="1rem">
      <AspectRatio
        maxW="300px"
        ratio={0.9}
        width="30%"
        bgGradient={'linear-gradient(0deg, #1D1D1D 0%, rgba(21, 21, 21, 0) 100%)'}
      >
        <Image src={data.image} alt={data.name} />
      </AspectRatio>
      <Box marginLeft="1.5rem" display="flex" flexDirection="column" justifyContent="space-between" width="70%">
        <Box>
          <Text fontSize="2.19rem" textTransform="uppercase" fontWeight="bold" lineHeight="1">
            {data.name}
          </Text>
          <Text fontSize="1.31rem" color="#999999" textTransform="uppercase" fontWeight="bold">
            {data.description}
          </Text>
        </Box>
        <Box fontSize="1.31rem" display="flex" alignItems="flex-end">
          <Box>
            <Box as="span" display="flex" alignItems="center" gap="1rem" margin=".5rem 0">
              <Text fontWeight="bold" textTransform="uppercase">
                Quantity:
              </Text>
              <ItemAmoutInput value={data.amount!} itemId={data.id} />
            </Box>
            <Box as="span" display="flex" alignItems="center" gap="1rem" margin=".5rem 0">
              <Text fontWeight="bold" textTransform="uppercase">
                Size:
              </Text>
              <SizesList sizes={data.sizes} itemId={data.id} />
            </Box>
          </Box>
          <Text marginLeft="auto" fontSize="2.19rem">
            ${data.price}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default ProductCard
