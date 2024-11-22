import  { useState } from 'react';
import { DasBoardLayout } from '@layouts/DashBoardLayout';
import { ItemList } from '@components/ItemList';
import AddItem from '@pages/AddItem';
import ChangePassword from '@pages/ChangePassword';
import { Help } from '@pages/Help';
import { useShallow } from 'zustand/shallow';
import { useStoreData } from '@store/store';

interface DashboardProps {
  onLogout: () => void
}

function Dashboard({ onLogout }: DashboardProps) {

  const [currentPage, setCurrentPage] = useState<itemsNavValue>('items');
  const {items, addItem, updateItem, removeItem} = useStoreData(
    useShallow( (state => ({
      items: state.store,
      addItem: state.addItem,
      updateItem: state.updateItem,
      removeItem: state.removeItem,
    })))
  )

  const handleAddItem = (item: Omit<ItemType, 'id'>) => {
    const newItem = {
      ...item,
      id: Math.random().toString(36).substr(2, 9),
    };
    // setItems([...items, newItem]);
    addItem(newItem);
    setCurrentPage('items');
  };

  const handleDeleteItem = (id: string) => {
    // setItems(items.filter(item => item.id !== id));
    removeItem(id);
  };

  const handleEditItem = (updatedItem: ItemType) => {
    // setItems(items.map(item => item.id === updatedItem.id ? updatedItem : item));
    updateItem(updatedItem);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'items':
        return <ItemList items={items} onDelete={handleDeleteItem} onEdit={handleEditItem} />;
      case 'add':
        return <AddItem onAdd={handleAddItem} onCancel={() => setCurrentPage('items')} />;
      case 'password':
        return <ChangePassword onSuccess={() => setCurrentPage('items')} />;
      case 'help':
        return <Help />;
      default:
        return null;
    }
  };

  return (
    <DasBoardLayout
      currentPage={currentPage}
      onNavigate={setCurrentPage}
      onLogout={onLogout}
    >
      {renderContent()}
    </DasBoardLayout>
  );
}

export { Dashboard };