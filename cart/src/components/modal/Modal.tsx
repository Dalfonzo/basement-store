import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  ModalFooter,
  Text,
  Image,
  Box,
} from '@chakra-ui/react'
import Button from './Button'
import your from '../../assets/svg/your.svg'
import cart from '../../assets/svg/cart.svg'
import checkout from '../../assets/svg/checkout.svg'
import ProductCard from './ProductCard'
import useStore from '../../store'
import { StoreT, ProductI } from 'common/src/types'

const ModalComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { items, totalPrice } = useStore((state: StoreT) => ({
    items: state.items,
    totalPrice: state.totalPrice,
  }))

  return (
    <>
      <Button onOpen={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent
          border="solid white"
          borderWidth="0 0 1px 1px"
          background="black"
          color="white"
          borderRadius="0"
          marginTop="0"
        >
          <ModalBody>
            <Text
              onClick={onClose}
              marginLeft="auto"
              width="fit-content"
              fontSize="1.5rem"
              fontWeight="bold"
              textTransform="uppercase"
              padding="1rem 0"
              _hover={{
                cursor: 'pointer',
              }}
            >
              <Text as="span" marginRight=".4em">
                &rarr;
              </Text>
              Close
            </Text>
            <Box display="flex" overflow="hidden" justifyContent="space-between" paddingBottom="1rem">
              <Image src={your} alt="your" width="48%" />
              <Image src={cart} alt="cart" width="48%" />
            </Box>
            <Box>
              {items.map((item: ProductI) => (
                <ProductCard key={item.id} data={item} />
              ))}
            </Box>
          </ModalBody>
          <ModalFooter borderTop="1px solid white" display="flex" padding="0" alignItems="center">
            <Text width="70%" fontSize="2.19rem" marginLeft="2rem">
              Total: ${totalPrice}
            </Text>
            <Image
              borderLeft="1px solid white"
              padding="2rem"
              src={checkout}
              alt="checkout"
              width="30%"
              _hover={{
                cursor: 'pointer',
              }}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalComponent
