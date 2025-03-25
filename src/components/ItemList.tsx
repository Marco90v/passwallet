import { useState } from 'react';
import FilterButton from '@components/FilterButton';
import EditForm from '@components/EditForm';
import ItemPreview from '@components/ItemPreview';
import BaseTableItems from '@layouts/BaseTableItems';
import MenuTableItems from '@layouts/MenuTableItems';
import BodyTableItems from '@layouts/BodyTableItems';
import RowTableItem from '@layouts/RowTableItem';

import { AlignLeft, Captions, Globe, Link, Mail, User } from 'lucide-react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useStoreData } from '@store/store';
import { useShallow } from 'zustand/shallow';
import { ALL, BANKING, OTHER, SOCIAL } from '@utils/const';
import { capitalize } from '@utils/functions';

interface ItemListProps {
  items: ItemType[];
  onDelete: (id: string) => void;
  onEdit: (item: ItemType) => void;
};

const itemsFilterButton:{value:itemsfilterValue, label:string}[] = [
  { value: ALL, label: capitalize(ALL) },
  { value: SOCIAL, label: capitalize(SOCIAL) },
  { value: BANKING, label: capitalize(BANKING) },
  { value: OTHER, label: capitalize(OTHER) },
];

const iconBase = {
  title: <Captions className='text-indigo-800' />,
  username: <User className='text-indigo-800' />,
  category: <Globe className='text-indigo-800' />,
  url: <Link className='text-indigo-800' />,
  email: <Mail className='text-indigo-800' />,
}

function ItemList({ items, onDelete, onEdit }: ItemListProps) {

  const {updateItem} = useStoreData(
    useShallow( (state => ({
      updateItem: state.updateItem,
    })))
  )

  const [filter, setFilter] = useState<itemsfilterValue>(ALL);
  const [editingItem, setEditingItem] = useState<string | null>(null);

  const methods = useForm<ItemType>();
  
  const onSubmit:SubmitHandler<ItemType> = (data:ItemType) => {
    setEditingItem(null);
    updateItem(data);
    methods.reset();
  }

  const editItem = (id:string) => {
    const item = items.find(item => item.id === id)
    if (item){
      Object.keys(item).map((key:string) => {
        methods.setValue(key as keyof ItemType, item[key as keyof ItemType]);
      });
      setEditingItem(item.id);
    }
  }

  const filterItems = () => {
    return items.filter(
      item => filter === ALL || item.category === filter
    )
  }

  return (
    <BaseTableItems>
      <MenuTableItems>
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
      </MenuTableItems>

      <BodyTableItems length={items.length}>
        {
          filterItems().map(item => (
            <RowTableItem key={item.id}>
              {
                editingItem === item.id ? (
                  <FormProvider {...methods}>
                    <EditForm
                      onSubmit={onSubmit}
                      item={item}
                      onCancel={() => setEditingItem(null)}
                      icons={iconBase}
                    />
                  </FormProvider>
                ) : (
                  <ItemPreview
                    item={item}
                    onDelete={onDelete}
                    setEditingItem={editItem}
                  />
                )
              }
            </RowTableItem>
          ))
        }
      </BodyTableItems>
    </BaseTableItems>
  );
}

export { ItemList };