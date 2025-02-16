import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface State {
  L_A: boolean; // Login or Account
  session: {
    active: boolean;
    email: string;
    salt: string;
  }
}
interface Action {
  changeL_A: () => void;
  changeSession: (active: boolean, email?:string, salt?:string) => void;
}

const useStoreSession = create<State & Action>()(
  devtools(
    persist(
      (set) => ({
        L_A: true,
        session: {
          active: false,
          email: "",
          salt: "",
        },
        changeL_A: () => set(state=>({L_A:!state.L_A})),
        changeSession: (active, email="", salt="") => set(()=>(
          {session:{active,email,salt}}
        )),
      }),
      { name: 'storeSession' }
    )
  )
)

export {useStoreSession}