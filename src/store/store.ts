import { saveData } from '@utils/firebase';
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { useStoreFirebase } from './firebase';
import { useStoreSession } from './session';

interface State {
  store: ItemType[]
  mySet: (set: any) => void;
}
interface Action {
  addItem: (item: ItemType) => void;
  updateItem: (item: ItemType) => void;
  removeItem: (id: string) => void;
  setItems: (items: ItemType[]) => void;
  clearItems: () => void;
}

const save = async (temp: ItemType[]) => {
  const FbApp = useStoreFirebase.getState().appFirebase;
  const email= useStoreSession.getState().session.email;
  const pass= useStoreSession.getState().session.password;
  const salt= useStoreSession.getState().session.salt;
  const res = await saveData(FbApp, temp, email, pass, salt);
  if(res){
    const set = useStoreData.getState().mySet;
    set((state: State) => ({
      ...state,
      store: temp,
    }));
  }
}

const useStoreData = create<State & Action>()(
  devtools(
    persist(
      (set) => ({
        store: [],
        mySet:set,
        addItem: (item: ItemType) => set(state=>{
          const temp = {store:[...state.store, item]};
          save(temp.store);
          return {...state}
        }),
        updateItem: (item: ItemType) => set(state=>{
          const temp = state.store.map(i => i.id === item.id ? item : i);
          save(temp);
          return {...state}
        }),
        removeItem: (id: string) => set(state=>{
          const temp = state.store.filter(item => item.id !== id);
          save(temp)
          return {...state}
        }),
        setItems: (items: ItemType[]) => set(state=>({...state,store: items})),
        clearItems: () => set(state=>({...state, store: []})),
      }),
      { name: 'storeData' }
    )
  )
)

export {useStoreData}