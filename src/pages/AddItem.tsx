import EditForm from '@components/EditForm';
import { Edit } from 'lucide-react';
import React, { FormEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
// import { ItemType } from '../types';

type AddItemProps = {
  // onAdd: (item: Omit<ItemType, 'id'>) => void;
  onAdd: (item: ItemType) => void;
  onCancel: () => void;
};

const dataBase = {
  id: '',
  title: '',
  username: '',
  password: '',
  category: 'social',
  url: '',
  email: '',
}

function AddItem({ onAdd, onCancel }: AddItemProps) {
  const [item, setItem] = useState(dataBase);

  // const {register, handleSubmit, setValue} = useForm<ItemType>({
  //   defaultValues: {
  //     title: '',
  //     username: '',
  //     email: '',
  //     password: '',
  //     category: 'social',
  //   },
  // });

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   onAdd(item);
  // };

  // const onSubmit: SubmitHandler<ItemType> = (data) => {
  //   onAdd(data);
  // }

  const onSave = (data:ItemType) => {
    onAdd(data);
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Add New Password</h2>
        <EditForm
          item={item}
          onSave={onSave}
          onCancel={onCancel}
        />
      </div>
    </div>
  );
}

export default AddItem;