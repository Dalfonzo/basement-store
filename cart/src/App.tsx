import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Button,
  ModalFooter,
} from '@chakra-ui/react'

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        backgroundColor="black"
        border="1px solid white"
        _hover={{ background: 'white', color: 'black' }}
        borderRadius="50px"
        padding="0 2rem"
        fontSize="1.125rem"
        onClick={onOpen}
      >
        Cart (0)
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>asdasdasdada</p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default App
