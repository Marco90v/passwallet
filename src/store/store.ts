import { saveData } from '@utils/firebase';
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { useStoreFirebase } from './firebase';
import { useStoreSession } from './session';
import useAlertStore from './alert';
import { ERROR } from '@utils/const';

interface State {
  store: ItemType[]
}
interface Action {
  modifyStore: (action:actionModify, data:ItemType, callback?:()=>void) => void;
  setItems: (items: ItemType[]) => void;
  clearItems: () => void;
}

const save = async (temp: ItemType[], set:any,  callback?: () => void) => {
  try {
    const FbApp = useStoreFirebase.getState().appFirebase;
    const email= useStoreSession.getState().session.email;
    const pass= useStoreSession.getState().session.password;
    const salt= useStoreSession.getState().session.salt;
    const res = await saveData(FbApp, temp, email, pass, salt);
    if(res){
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

const action = {
  add: (get:any, item:ItemType) => [...get().store, item],
  update: (get:any, item:ItemType) => get().store.map((i:ItemType) => i.id === item.id ? item : i),
  remove: (get:any, item:ItemType) => get().store.filter((i:ItemType) => i.id !== item.id)
}

const useStoreData = create<State & Action>()(
  devtools(
    persist(
      (set, get) => ({
        store: [],
        modifyStore: (a:actionModify, data, callback) => {
          const temp = action[a](get, data);
          save(temp, set, callback);
        },
        setItems: (items: ItemType[]) => set(state=>({...state,store: items})),
        clearItems: () => set(state=>({...state, store: []})),
      }),
      { name: 'storeData' }
    )
  )
)

export {useStoreData}