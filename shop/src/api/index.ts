import Cap from '../assets/img/cap.png'
import Hoodie from '../assets/img/hoodie.png'
import Shirt from '../assets/img/shirt.png'
import { ProductI } from '~/components/products-grid/ProductsGrid'

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
          },
          {
            id: 2,
            image: Hoodie,
            price: 13,
            name: 'Black hoodie',
            sizes: ['S', 'M', 'L'],
          },
          {
            id: 3,
            image: Shirt,
            price: 7.95,
            name: 'Black t-shirt',
            sizes: ['S', 'M', 'XL'],
          },
        ])
      }, 1000)
    ),
}
