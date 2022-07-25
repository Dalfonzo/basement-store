import React, { useState } from 'react'
import { Box, Image, Text, AspectRatio } from '@chakra-ui/react'
import useStore from '../../store'
import { StoreT, ProductI } from 'common/src/types'
import AddToCartSVG from '../../assets/svg/add_to_cart.svg'
import BuyMeSVG from '../../assets/svg/buy_me.svg'

const ProductCard = ({ data }: { data: ProductI }) => {
  const { addItem, items } = useStore((state: StoreT) => ({
    addItem: state.addItem,
    items: state.items,
  }))

  const [isSelected, setIsSelected] = useState(false)

  React.useEffect(() => {
    const itemExists = items.find((item: ProductI) => item.id === data.id)
    if (!itemExists) return
    setIsSelected(true)
  }, [items, data])

  return (
    <Box
      onClick={() => addItem(data)}
      _hover={{
        cursor: 'pointer',
        _after: {
          opacity: 1,
        },
      }}
      _after={{
        opacity: 0,
        content: '""',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        background: `url("${isSelected ? BuyMeSVG : AddToCartSVG}")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 45%',
        backgroundSize: `${isSelected ? '30%' : '52%'}`,
      }}
      position="relative"
    >
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
