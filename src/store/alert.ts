import {create} from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface AlertState {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  isVisible: boolean;
  showAlert: (message: string, type: 'success' | 'error' | 'info' | 'warning') => void;
  hideAlert: () => void;
}


const useAlertStore = create<AlertState>()(
  devtools(
    persist(
      (set, get) => ({
        message:"Textto de prueba",
        type:"success",
        isVisible:false,
        showAlert: (message, type) => set({ message, type, isVisible: true }),
        hideAlert: () => set({ isVisible: false }),
      }),
      { name: 'storeSession' }
    )
  )
);

export default useAlertStore;