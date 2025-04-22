import Alert from '@components/Alert';
import EditForm from '@components/EditForm';
import useAlertStore from '@store/alert';
import { useStoreFirebase } from '@store/firebase';
import { useStoreSession } from '@store/session';
import { useStoreData } from '@store/store';
import { saveData } from '@utils/firebase';
import { validationPassword } from '@utils/functions';
import { getAuth, updatePassword } from 'firebase/auth';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useShallow } from 'zustand/shallow';

interface ChangePasswordProps {
  onCancel: () => void;
};

const password:PasswordType = {
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
};

function ChangePassword({ onCancel }: ChangePasswordProps) {

  const {FbApp} = useStoreFirebase(
    useShallow( (state => ({
      FbApp: state.appFirebase,
    })))
  );

  const {currentPassword, email, salt} = useStoreSession(
    useShallow( (state => ({
      currentPassword: state.session.password,
      email: state.session.email,
      salt: state.session.salt,
    })))
  );

  const {store} = useStoreData(
    useShallow( (state => ({
      store: state.store,
    })))
  );

  const {showAlert} = useAlertStore(
    useShallow( (state => ({
      showAlert: state.showAlert,
    })))
  );

  const [standby, setStandby] = useState(false);
  
  const methods = useForm<ItemType>();

  const onSubmit:SubmitHandler<PasswordType> = (data:PasswordType) => {
    setStandby(prev => !prev);
    const auth = getAuth();
    const result = validationPassword(currentPassword, data);
    const user = auth.currentUser;
    if(user && result.result) {
      updatePassword(user, data.newPassword).then(() => {
        saveData(FbApp, store, email, data.newPassword, salt).then((res) => {
          methods.reset();
          showAlert(result.message, "success");
          setStandby(prev => !prev);
        });
      }).catch(() => {
        showAlert(result.message, "error");
        setStandby(prev => !prev);
      });
    }else{
      setStandby(prev => !prev);
      showAlert(result.message, "error");
    }
  }

  return (
    <>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">Change Master Password</h2>
          <FormProvider {...methods}>
            <EditForm
              onSubmit={onSubmit}
              item={password}
              onCancel={onCancel} 
              disabled={standby}
            />
          </FormProvider>
        </div>
      </div>
      <Alert />
    </>
  );
}

export default ChangePassword;