import create from 'zustand'
import { createCartSlice } from './slices/cartSlice'
import { StoreT } from '../types'

const useStore = create<StoreT>()((...a) => ({
  ...createCartSlice(...a),
}))

export default useStore
