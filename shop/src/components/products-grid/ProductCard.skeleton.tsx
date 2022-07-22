import React from 'react'
import { AspectRatio, Skeleton } from '@chakra-ui/react'

const ProductCardSkeleton = () => {
  return (
    <AspectRatio maxW="100vw" ratio={0.7}>
      <Skeleton isLoaded={false} width="100%" height="100%" startColor="#1D1D1D" endColor="#3d3d3d" />
    </AspectRatio>
  )
}

export default ProductCardSkeleton
