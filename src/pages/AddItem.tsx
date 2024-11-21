import EditForm from '@components/EditForm';
import { Captions, Globe, Link, Mail, User } from 'lucide-react';

type AddItemProps = {
  // onAdd: (item: Omit<ItemType, 'id'>) => void;
  onAdd: (item: ItemType) => void;
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

function AddItem({ onAdd, onCancel }: AddItemProps) {

  const onSave = (data:ItemType) => {
    onAdd(data);
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Add New Password</h2>
        <EditForm
          item={dataBase}
          onSave={onSave}
          onCancel={onCancel}
          icons={iconBase}
        />
      </div>
    </div>
  );
}

export default AddItem;