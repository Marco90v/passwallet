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
  const {items, setItems} = useStoreData(
    useShallow( (state => ({
      items: state.store,
      setItems: state.setItems,
    })))
  )

  useEffect(() => {
    if(items.length === 0){
      getDataDB(appFirebase,email).then((res:DocumentData | null) => {
        if(res === null) return;
        const decryptedData = decrypt(res.data, pass, salt);
        setItems(JSON.parse(decryptedData));
      }).catch(err=>{
        console.error("error")
      })
    }
  },[])
  
  const renderContent = () => {
    switch (currentPage) {
      case 'items':
        return <ItemList />;
      case 'add':
        return <AddItem onCancel={() => setCurrentPage('items')} />;
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