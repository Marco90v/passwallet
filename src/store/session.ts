import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface State {
  L_A: boolean; // Login or Account
  session: boolean
}
interface Action {
  changeL_A: () => void;
  changeSession: () => void;
}

const useStoreSession = create<State & Action>()(
  devtools(
    persist(
      (set) => ({
        L_A: true,
        session: true,
        changeL_A: () => set(state=>({L_A:!state.L_A})),
        changeSession: () => set(state=>({session:!state.session})),
      }),
      { name: 'storeSession' }
    )
  )
)

export {useStoreSession}