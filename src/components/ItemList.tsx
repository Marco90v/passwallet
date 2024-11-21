import { useState } from 'react';
import FilterButton from '@components/FilterButton';
import EditForm from '@components/EditForm';
import ItemPreview from '@components/ItemPreview';
import { Captions, Globe, Link, Mail, User } from 'lucide-react';

interface ItemListProps {
  items: ItemType[];
  onDelete: (id: string) => void;
  onEdit: (item: ItemType) => void;
};

const itemsFilterButton:{value:itemsfilterValue, label:string}[] = [
  { value: 'all', label: 'All' },
  { value: 'social', label: 'Social' },
  { value: 'banking', label: 'Banking' },
  { value: 'other', label: 'Other' },
];

const iconBase = {
  title: <Captions className='text-indigo-800' />,
  username: <User className='text-indigo-800' />,
  category: <Globe className='text-indigo-800' />,
  url: <Link className='text-indigo-800' />,
  email: <Mail className='text-indigo-800' />,
}

 function ItemList({ items, onDelete, onEdit }: ItemListProps) {

  const [filter, setFilter] = useState<itemsfilterValue>('all');
  const [editingItem, setEditingItem] = useState<ItemType | null>(null);

  const onSave = (updatedItem:ItemType) => {
    onEdit(updatedItem);
    setEditingItem(null);
  }

  const filteredItems = items.filter(
    item => filter === 'all' || item.category === filter
  );

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-slate-800">Stored Passwords</h2>
          <div className="flex space-x-2">
            {
              itemsFilterButton.map((value, index) => {
                return (
                  <FilterButton
                    key={index}
                    label={value.label}
                    value={value.value}
                    current={filter}
                    onClick={setFilter}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="divide-y divide-slate-200">
        {filteredItems.map(item => (
          <div key={item.id} className="p-4 hover:bg-slate-50">
            {
              editingItem?.id === item.id ? (
                <EditForm<ItemType>
                  item={editingItem}
                  onSave={onSave}
                  onCancel={() => setEditingItem(null)}
                  icons={iconBase}
                  edit
                />
              ) : (
                <ItemPreview
                  item={item}
                  onDelete={onDelete}
                  setEditingItem={setEditingItem}
                />
              )}
          </div>
        ))}
        {filteredItems.length === 0 && (
          <div className="p-8 text-center text-slate-500">
            No items found. Add some passwords to get started!
          </div>
        )}
      </div>
    </div>
  );
}

export { ItemList };