import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface State {
  L_A: boolean; // Login or Account
  session: {
    active: boolean;
    email: string;
    salt: string;
    password: string;
  }
}
interface Action {
  changeL_A: () => void;
  changeSession: (active: boolean, email:string, salt:string, password:string) => void;
  logout: () => void;
}

const sessionInit = {
  active: false,
  email: "",
  salt: "",
  password: "",
}

const useStoreSession = create<State & Action>()(
  devtools(
    persist(
      (set) => ({
        L_A: true,
        session: sessionInit,
        changeL_A: () => set(state=>({L_A:!state.L_A})),
        changeSession: (active, email, salt, password) => set(()=>(
          {session:{active,email,salt,password}}
        )),
        logout: () => set(()=>({session:sessionInit})),
      }),
      { name: 'storeSession' }
    )
  )
)

export {useStoreSession}