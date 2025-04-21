import { saveData } from '@utils/firebase';
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { useStoreFirebase } from './firebase';
import { useStoreSession } from './session';
import useAlertStore from './alert';
import { ERROR } from '@utils/const';

interface State {
  store: ItemType[]
  mySet: (set: any) => void;
}
interface Action {
  addItem: (item: ItemType, callback?:() => void) => void;
  updateItem: (item: ItemType, callback?:() => void) => void;
  removeItem: (id: string, callback?:()=>void) => void;
  setItems: (items: ItemType[]) => void;
  clearItems: () => void;
}

const save = async (temp: ItemType[], callback?: () => void) => {
  try {
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
    callback && callback();
  } catch (error) {
    console.log("Error save")
    useAlertStore.getState().showAlert("Error saving data", ERROR);
    callback && callback();
  }
  
}

const useStoreData = create<State & Action>()(
  devtools(
    persist(
      (set) => ({
        store: [],
        mySet:set,
        addItem: (item: ItemType, callback) => set(state=>{
          const temp = {store:[...state.store, item]};
          save(temp.store, callback);
          return {...state}
        }),
        updateItem: (item: ItemType, callback) => set(state=>{
          const temp = state.store.map(i => i.id === item.id ? item : i);
          save(temp, callback);
          return {...state}
        }),
        removeItem: (id, callback) => set(state=>{
          const temp = state.store.filter(item => item.id !== id);
          save(temp, callback);
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