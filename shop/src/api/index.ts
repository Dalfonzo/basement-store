import Cap from '../assets/img/cap.png'
import Hoodie from '../assets/img/hoodie.png'
import Shirt from '../assets/img/shirt.png'
import { ProductI } from 'common/src/types'

export default {
  list: (): Promise<ProductI[]> =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve([
          {
            id: 1,
            image: Cap,
            price: 23,
            name: 'Black cap',
            sizes: ['S', 'M', 'L', 'XL'],
            description: 'Cap with a clean look',
          },
          {
            id: 2,
            image: Hoodie,
            price: 13,
            name: 'Black hoodie',
            sizes: ['S', 'M', 'L'],
            description: 'Awesome Hoodie',
          },
          {
            id: 3,
            image: Shirt,
            price: 7.95,
            name: 'Black t-shirt',
            sizes: ['S', 'M', 'XL'],
            description: 'Simple Shirt',
          },
        ])
      }, 1000)
    ),
}
