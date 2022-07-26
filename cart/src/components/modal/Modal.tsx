import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalBody, Button, ModalFooter, Text, Image, Box } from '@chakra-ui/react'
import CustomButton from './Button'
import your from '../../assets/svg/your.svg'
import cart from '../../assets/svg/cart.svg'
import checkout from '../../assets/svg/checkout.svg'
import ProductCard from './ProductCard'
import useStore from '../../store'
import { StoreT, ProductI } from 'common/src/types'

const ModalComponent = () => {
  const { items, totalPrice, isOpen, onClose, checkoutHandler } = useStore((state: StoreT) => ({
    items: state.items,
    totalPrice: state.totalPrice,
    isOpen: state.isOpen,
    onClose: state.onClose,
    checkoutHandler: state.checkoutHandler,
  }))

  return (
    <>
      <CustomButton />
      <Modal isOpen={isOpen} onClose={onClose} size={{ base: 'full', md: 'xl', lg: '2xl', xl: '4xl' }}>
        <ModalOverlay />
        <ModalContent
          border="solid white"
          borderWidth={{ base: '0', md: '0 0 1px 1px' }}
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
              fontSize={['0.88rem', '1.08rem', '1.29rem', '1.50rem']}
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
            <Box
              display="flex"
              overflow="hidden"
              justifyContent="space-between"
              paddingBottom="1rem"
              flexDirection={{ base: 'column', sm: 'row' }}
            >
              <Image src={your} alt="your" width={{ base: '100%', sm: '48%' }} padding="1rem 0" />
              <Image src={cart} alt="cart" width={{ base: '100%', sm: '48%' }} padding="1rem 0" />
            </Box>
            <Box>
              {items.map((item: ProductI) => (
                <ProductCard key={item.id} data={item} />
              ))}
            </Box>
          </ModalBody>
          <ModalFooter
            borderStyle="solid"
            borderColor="white"
            borderWidth={{ base: '0', sm: '1px 0 0 0' }}
            display="flex"
            padding="0"
            alignItems={{ base: 'flex-start', sm: 'center' }}
            flexDirection={{ base: 'column', sm: 'row' }}
          >
            <Text
              width={{ base: '100%', sm: '70%' }}
              fontSize={['1.25rem', '1.56rem', '1.88rem', '2.19rem']}
              display="flex"
              padding={{ base: '1rem 2rem', sm: '0 1rem' }}
              marginRight="auto"
            >
              <Box as="span" textTransform="uppercase">
                Total:
              </Box>
              <Box as="span" marginLeft={{ base: 'auto', sm: '1rem' }}>
                ${totalPrice}
              </Box>
            </Text>
            <Button
              disabled={items.length === 0}
              _disabled={{ display: 'none', pointerEvents: 'none' }}
              onClick={checkoutHandler}
              borderColor="white"
              borderStyle="solid"
              borderWidth={{ base: '1px 0 0 0', sm: '0 0 0 1px' }}
              padding={['2rem', '1.33rem', '1.67rem', '2.00rem']}
              width={{ base: '100%', sm: '30%' }}
              backgroundImage={checkout}
              backgroundColor="black"
              backgroundRepeat="no-repeat"
              backgroundPosition="center"
              backgroundSize="80%"
              borderRadius="0"
              _hover={{
                backgroundColor: 'black',
              }}
              _active={{
                backgroundColor: 'black',
              }}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalComponent
