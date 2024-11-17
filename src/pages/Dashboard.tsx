import  { useState } from 'react';
import { DasBoardLayout } from '@layouts/DashBoardLayout';
import { ItemList } from '@components/ItemList';
import AddItem from '@pages/AddItem';


interface DashboardProps {
  onLogout: () => void
}

function Dashboard({ onLogout }: DashboardProps) {

  const [currentPage, setCurrentPage] = useState<itemsNavValue>('items');
  const [items, setItems] = useState<ItemType[]>([
    {
      id: '1',
      title: 'Gmail',
      username: 'user@gmail.com',
      email: 'user@gmail.com',
      password: '123456789',
      category: 'social',
      url: 'https://gmail.com',
    },
    {
      id: '2',
      title: 'Bank Account',
      username: 'user123',
      email: '',
      password: '123456789',
      category: 'banking',
      url: 'https://mybank.com',
    },
  ]);

  const handleAddItem = (item: Omit<ItemType, 'id'>) => {
    const newItem = {
      ...item,
      id: Math.random().toString(36).substr(2, 9),
    };
    setItems([...items, newItem]);
    setCurrentPage('items');
  };

  const handleDeleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleEditItem = (updatedItem: ItemType) => {
    setItems(items.map(item => item.id === updatedItem.id ? updatedItem : item));
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'items':
        return <ItemList items={items} onDelete={handleDeleteItem} onEdit={handleEditItem} />;
      case 'add':
        return <AddItem onAdd={handleAddItem} onCancel={() => setCurrentPage('items')} />;
      // case 'password':
      //   return <ChangePassword onSuccess={() => setCurrentPage('items')} />;
      // case 'help':
      //   return <Help />;
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