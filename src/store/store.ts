import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface State {
  store: ItemType[]
}
interface Action {
  addItem: (item: ItemType) => void;
  updateItem: (item: ItemType) => void;
  removeItem: (id: string) => void;
}

const itemsInit: ItemType[] = [
  {
    id: '1',
    title: 'Item 1',
    username: 'User 1',
    email: 'user1@mail.com',
    password: '123456',
    category: 'Banking',
    url: 'https://www.google.com',
  },
  {
    id: '2',
    title: 'Item 2',
    username: 'User 2',
    email: 'user2@mail.com',
    password: '123456',
    category: 'Banking',
    url: 'https://www.google.com',
  },
]

const useStoreData = create<State & Action>()(
  devtools(
    persist(
      (set) => ({
        store: itemsInit,
        addItem: (item: ItemType) => set(state=>({store:[...state.store, item]})),
        updateItem: (item: ItemType) => set(state=>({store: state.store.map(i => i.id === item.id ? item : i)})),
        removeItem: (id: string) => set(state=>({store: state.store.filter(item => item.id !== id)})),
      }),
      { name: 'storeData' }
    )
  )
)

export {useStoreData}