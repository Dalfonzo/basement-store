import React, { useEffect } from 'react'
import ProductsGrid from './components/products-grid'
import MainLayout from './layouts/MainLayout'
import { Box, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Asterisk1 from './assets/svg/asterisk_a.svg'
import Asterisk2 from './assets/svg/asterisk_b.svg'
import useResizeObserver from 'use-resize-observer'
import useStore from './store'
import { StoreT } from 'common/src/types'
import Confetti from 'react-dom-confetti'

const App = () => {
  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>()

  const { stopConfetti, fireConfetti } = useStore((state: StoreT) => ({
    stopConfetti: state.stopConfetti,
    fireConfetti: state.fireConfetti,
  }))

  const config = {
    angle: 346,
    spread: 360,
    startVelocity: 40,
    elementCount: 174,
    dragFriction: 0.12,
    duration: 1500,
    stagger: 2,
    width: '78px',
    height: '28px',
    perspective: '998px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
  }

  useEffect(() => {
    stopConfetti()
  }, [fireConfetti, stopConfetti])

  return (
    <Box ref={ref}>
      <motion.div
        drag
        dragElastic={0}
        dragConstraints={{
          top: -(height * 0.75),
          left: -(width * 0.75),
          right: width - 100 - width * 0.75,
          bottom: height - 100 - height * 0.75,
        }}
        style={{
          width: 0.1 * width,
          height: 0.1 * width,
          minWidth: '50px',
          minHeight: '50px',
          zIndex: '999',
          position: 'absolute',
          top: height * 0.75 + 'px',
          left: width * 0.75 + 'px',
        }}
        animate={{
          rotate: [0, 360, -360, 0],
        }}
        transition={{ repeat: Infinity, duration: 50 }}
      >
        <Image src={Asterisk1} alt="asterisk" width="100%" height="100%" pointerEvents="none" />
      </motion.div>
      <motion.div
        drag
        dragElastic={0}
        dragConstraints={{
          top: -(height * 0.3),
          left: -(width * 0.3),
          right: width - 100 - width * 0.3,
          bottom: height - 100 - height * 0.3,
        }}
        style={{
          width: 0.1 * width,
          height: 0.1 * width,
          minWidth: '50px',
          minHeight: '50px',
          zIndex: '999',
          position: 'absolute',
          top: height * 0.3 + 'px',
          left: width * 0.3 + 'px',
        }}
        animate={{
          rotate: [0, -360, 360, 0],
        }}
        transition={{ repeat: Infinity, duration: 50 }}
      >
        <Image src={Asterisk2} alt="asterisk" width="100%" height="100%" pointerEvents="none" />
      </motion.div>
      <MainLayout>
        <Box margin="auto" width="fit-content" visibility="hidden" position="sticky" top="50%" left="50%">
          <Confetti active={fireConfetti} config={config} />
        </Box>
        <ProductsGrid />
      </MainLayout>
    </Box>
  )
}

export default App
