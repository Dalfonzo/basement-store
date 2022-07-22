import { Grid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import api from '../../api'
import ProductCard from './ProductCard'
import ProductCardSkeleton from './ProductCard.skeleton'

export interface ProductI {
  id: number
  image: string
  price: number
  name: string
  sizes: string[]
}

interface StateI {
  data?: ProductI[] | null
  status: 'idle' | 'rejected' | 'pending' | 'resolved'
  error?: string | null
}

const ProductsGrid = () => {
  const [{ data, status, error }, setState] = useState<StateI>({
    status: 'idle',
    data: null,
    error: null,
  })

  const isIdle = status === 'idle'
  const isLoading = status === 'pending'
  const isError = status === 'rejected'
  const isSuccess = status === 'resolved'

  useEffect(() => {
    setState({ status: 'pending' })
    api
      .list()
      .then((data) => {
        setState({ data, status: 'resolved' })
      })
      .catch((error) => {
        setState({ error, status: 'rejected' })
      })
  }, [])

  return (
    <Grid gap="2rem" gridTemplateColumns="repeat(3, minmax(0px, 1fr))" padding="0 2rem">
      {isLoading && [-1, -2, -3].map((item) => <ProductCardSkeleton key={item} />)}
      {isSuccess && data?.map((item) => <ProductCard key={item.id} data={item} />)}
    </Grid>
  )
}

export default ProductsGrid
