export interface ProductI {
  id: number
  image: string
  price: number
  name: string
  sizes: string[]
  description: string
  amount?: number
  size?: string
}

export interface CartSliceI {
  stopConfetti(): void
  fireConfetti: boolean
  checkoutHandler: () => void
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  totalPrice: number
  items: ProductI[]
  totalItems: number
  addItem: (payload: ProductI) => void
  removeItem: (id: number) => void
  increaseItemAmount: (id: number) => void
  decreaseItemAmount: (id: number) => void
  changeItemSize: (id: number, payload: string) => void
}

export type StoreT = CartSliceI
