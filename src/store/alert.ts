import {create} from 'zustand';
import { devtools } from 'zustand/middleware';

interface AlertState {
  message: string;
  type: TypeAlertState;
  isVisible: boolean;
  showAlert: (message: string, type: TypeAlertState) => void;
  hideAlert: () => void;
}


const useAlertStore = create<AlertState>()(
  devtools(
    (set) => ({
      message:"",
      type:"",
      isVisible:false,
      showAlert: (message, type) => set({ message, type, isVisible: true }),
      hideAlert: () => set({ isVisible: false }),
    }),
    { name: 'storeAlert' }
  )
);

export default useAlertStore;