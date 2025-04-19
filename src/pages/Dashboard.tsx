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
import { decrypt } from '@utils/functions';
import { DocumentData } from 'firebase/firestore';

function Dashboard() {

  const {appFirebase} = useStoreFirebase(
    useShallow( (state => ({
      appFirebase: state.appFirebase,
    })))
  )

  const {email, pass, salt} = useStoreSession(
    useShallow( (state => ({
      email: state.session.email,
      pass: state.session.password,
      salt: state.session.salt,
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
    if(items.length === 0){
      console.log('No hay items');
      getDataDB(appFirebase,email).then((res:DocumentData | null) => {
        if(res === null) return;
        const decryptedData = decrypt(res.data, pass, salt);
        setItems(JSON.parse(decryptedData));
      })
    }
  },[])
  

  const handleAddItem = (item: Omit<ItemType, 'id'>) => {
    setCurrentPage('items');
  };

  const handleDeleteItem = (id: string) => {
    removeItem(id);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'items':
        return <ItemList onDelete={handleDeleteItem} />;
      case 'add':
        return <AddItem onAdd={handleAddItem} onCancel={() => setCurrentPage('items')} />;
      case 'password':
        return <ChangePassword onSuccess={() => setCurrentPage('items')} onCancel={() => setCurrentPage('items')} />;
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