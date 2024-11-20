import EditForm from '@components/EditForm';
import React, { useState } from 'react';

interface PasswordType {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface ChangePasswordProps {
  onSuccess: () => void;
};

const password:PasswordType = {
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
};

function ChangePassword({ onSuccess }: ChangePasswordProps) {
  // const [currentPassword, setCurrentPassword] = useState('');
  // const [newPassword, setNewPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  // const [password, setPassword] = useState<PasswordType>({
  //   currentPassword: '',
  //   newPassword: '',
  //   confirmPassword: '',
  // });


  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Implement password change logic here
  //   onSuccess();
  // };

  const onSave = (data:PasswordType) => {
    // onAdd(data);
    console.log("funcion para cambiar la contraseña", data);
    // onSuccess();
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Change Master Password</h2>
        <EditForm<PasswordType>
          item={password}
          onSave={onSave}
          onCancel={() => null} 
        />
      </div>
    </div>
  );
}

export default ChangePassword;