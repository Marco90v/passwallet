import EditForm from '@components/EditForm';
import { useStoreData } from '@store/store';
import { ADD } from '@utils/const';
import { generateID } from '@utils/firebase';
import { Captions, Globe, Link, Mail, User } from 'lucide-react';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useShallow } from 'zustand/shallow';

interface AddItemProps {
  onCancel: () => void;
};

const iconBase = {
  title: <Captions className='text-indigo-800' />,
  username: <User className='text-indigo-800' />,
  category: <Globe className='text-indigo-800' />,
  url: <Link className='text-indigo-800' />,
  email: <Mail className='text-indigo-800' />,
}

const dataBase = {
  id: '',
  title: '',
  username: '',
  password: '',
  category: 'social',
  url: '',
  email: '',
}

function AddItem({ onCancel }: AddItemProps) {

  const {modifyStore} = useStoreData(
    useShallow( (state => ({
      modifyStore: state.modifyStore,
    })))
  )

  const [standby, setStandby] = useState(false);

  const methods = useForm<ItemType>();

  const callback = () => {
    setStandby(prev => !prev);
    methods.reset();
  }

  const onSubmit:SubmitHandler<ItemType> = (data:ItemType) => {
    setStandby(prev => !prev);
    const newData = {...data, id: generateID()};
    modifyStore(ADD,newData, callback);
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Add New Password</h2>
        <FormProvider {...methods}>
          <EditForm
            onSubmit={onSubmit}
            item={dataBase}
            onCancel={onCancel}
            icons={iconBase}
            disabled={standby}
          />
        </FormProvider>
      </div>
    </div>
  );
}

export default AddItem;