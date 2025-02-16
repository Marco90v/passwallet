import useAlertStore from '@store/alert';
import { CircleCheckBig, CircleX, Info, TriangleAlert } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useShallow } from 'zustand/shallow';

const styleAlert = {  
  success: {bg:'bg-green-600', txtColor:'text-white', icon:<CircleCheckBig />},
  warning: {bg:'bg-yellow-400', txtColor:'text-black', icon:<TriangleAlert />},
  error: {bg:'bg-red-600', txtColor:'text-black', icon:<CircleX />},
  info: {bg:'bg-blue-600', txtColor:'text-white', icon:<Info />},
}

const Alert = () => {
  const {message, type, isVisible, hideAlert} = useAlertStore(
    useShallow( (state => ({
      message: state.message,
      type: state.type,
      isVisible: state.isVisible,
      hideAlert: state.hideAlert,
    })))
  )

  const [transition, setTransition] = useState(false)

  useEffect(() => {
    if(isVisible) {
      const timer = setTimeout(() => setTransition(true), 500)
      const timer2 = setTimeout(() => setTransition(false), 4500)
      const timer3 = setTimeout(() => hideAlert(), 5000)
      return () => {
        clearTimeout(timer)
        clearTimeout(timer2)
        clearTimeout(timer3)
      }
    }
  }, [isVisible])
  
  if(!isVisible) return null;
  return (
    <div className={`absolute bottom-0 font-semibold px-4 py-2 rounded-md flex gap-4 items-center transition-all duration-500
     ${styleAlert[type].bg } ${styleAlert[type].txtColor} ${transition ? 'opacity-100 mb-8' : 'opacity-0 mb-0'}`}>
      {styleAlert[type].icon}
      {message}
    </div>
  );
};

export default Alert;