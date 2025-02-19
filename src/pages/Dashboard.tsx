import  { useEffect, useState } from 'react';
import { DasBoardLayout } from '@layouts/DashBoardLayout';
import { ItemList } from '@components/ItemList';
import AddItem from '@pages/AddItem';
import ChangePassword from '@pages/ChangePassword';
import { Help } from '@pages/Help';
import { useShallow } from 'zustand/shallow';
import { useStoreData } from '@store/store';
import { getDataDB } from '@utils/firebase';
import { useStoreFirebase } from '@store/firebase';
import { useStoreSession } from '@store/session';

// interface DashboardProps {
//   onLogout: () => void
// }

function Dashboard() {

  const {appFirebase} = useStoreFirebase(
    useShallow( (state => ({
      appFirebase: state.appFirebase,
    })))
  )

  const {email} = useStoreSession(
    useShallow( (state => ({
      email: state.session.email,
    })))
  )

  const [currentPage, setCurrentPage] = useState<itemsNavValue>('items');
  const {items, addItem, updateItem, removeItem, setItems} = useStoreData(
    useShallow( (state => ({
      items: state.store,
      addItem: state.addItem,
      updateItem: state.updateItem,
      removeItem: state.removeItem,
      setItems: state.setItems,
    })))
  )

  useEffect(() => {
    // getDataDB(appFirebase, email).then((res) => {
    //   console.log(res);
    // });
  
    return () => {}
  }, [])
  


  const handleAddItem = (item: Omit<ItemType, 'id'>) => {
    const newItem = {
      ...item,
      id: Math.random().toString(36).substr(2, 9),
    };
    addItem(newItem);
    setCurrentPage('items');
  };

  const handleDeleteItem = (id: string) => {
    removeItem(id);
  };

  const handleEditItem = (updatedItem: ItemType) => {
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
      // onLogout={onLogout}
    >
      {renderContent()}
    </DasBoardLayout>
  );
}

export { Dashboard };