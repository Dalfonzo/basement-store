import { StateCreator } from 'zustand'
import { ProductI, CartSliceI } from '../../types'

const calculateTotals = (items: ProductI[]) => {
  let totalPrice = 0,
    totalItems = 0

  items.forEach((item) => {
    totalItems += item.amount!
    totalPrice += item.price * item.amount!
  })
  return { totalItems, totalPrice }
}

export const createCartSlice: StateCreator<CartSliceI, [], [], CartSliceI> = (set) => ({
  stopConfetti: () => set((state) => ({ ...state, fireConfetti: false })),
  fireConfetti: false,
  checkoutHandler: () =>
    set((state) => ({ ...state, totalPrice: 0, items: [], totalItems: 0, isOpen: false, fireConfetti: true })),
  isOpen: false,
  onOpen: () => set((state) => ({ ...state, isOpen: true })),
  onClose: () => set((state) => ({ ...state, isOpen: false })),
  totalPrice: 0,
  items: [],
  totalItems: 0,
  addItem: (payload) =>
    set((state) => {
      let newState = {} as CartSliceI
      let itemAlreadyExists = false

      const updatedItems = state.items.map((item) => {
        if (item.id === payload.id) {
          item.amount! += 1
          itemAlreadyExists = true
        }
        return item
      })

      newState = {
        ...state,
        items: itemAlreadyExists ? updatedItems : [...state.items, { ...payload, amount: 1, size: payload.sizes[0] }],
      }

      return { ...newState, ...calculateTotals(newState.items), isOpen: true }
    }),
  removeItem: (id) =>
    set((state) => {
      const newItems = state.items.filter((item) => item.id !== id)
      return {
        ...state,
        items: newItems,
        ...calculateTotals(newItems),
      }
    }),
  increaseItemAmount: (id) =>
    set((state) => {
      let newState = {} as CartSliceI
      const updatedItems = state.items.map((item) => {
        if (item.id === id) {
          item.amount! += 1
        }
        return item
      })
      newState = { ...state, items: updatedItems }
      return { ...newState, ...calculateTotals(newState.items) }
    }),
  decreaseItemAmount: (id) =>
    set((state) => {
      let newState = {} as CartSliceI

      const updatedItems = state.items.map((item) => {
        if (item.id === id) {
          item.amount = item.amount! > 1 ? item.amount! - 1 : item.amount
        }
        return item
      })

      newState = { ...state, items: updatedItems }
      return { ...newState, ...calculateTotals(newState.items) }
    }),
  changeItemSize: (id, payload) =>
    set((state) => {
      const updatedItems = state.items.map((item) => {
        if (item.id === id) {
          item.size = payload
        }
        return item
      })

      return { ...state, items: updatedItems }
    }),
})
