import EditForm from '@components/EditForm';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

interface PasswordType {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface ChangePasswordProps {
  onSuccess: () => void;
  onCancel: () => void;
};

const password:PasswordType = {
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
};

function ChangePassword({ onSuccess,onCancel }: ChangePasswordProps) {
  const methods = useForm<ItemType>();

  const onSave = (data:PasswordType) => {
    // onAdd(data);
    console.log("funcion para cambiar la contraseña", data);
    // onSuccess();
  }

  const onSubmit:SubmitHandler<PasswordType> = (data:PasswordType) => {
    console.log("funcion para cambiar la contraseña", data);

      // const newData = {...data, id: generateID()};
      // addItem(newData);
      methods.reset();
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Change Master Password</h2>
        {/* <EditForm<PasswordType> */}
        <FormProvider {...methods}>
          <EditForm
            onSubmit={onSubmit}
            item={password}
            onCancel={onCancel} 
          />
        </FormProvider>
      </div>
    </div>
  );
}

export default ChangePassword;