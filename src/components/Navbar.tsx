import NavButton from '@components/NavButton';
import { Shield, Key, Plus, HelpCircle, LogOut, Home, ChevronDown } from 'lucide-react';
import Button from './Button';
import { useShallow } from 'zustand/shallow';
import { getAuth, signOut } from 'firebase/auth';
import { useStoreSession } from '@store/session';
import { useStoreData } from '@store/store';
import { useState } from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: itemsNavValue) => void;
}

const arrPages:IPage[] = [
  {label: 'Items', value: 'items', icon: <Home />},
  {label: 'Add New', value: 'add', icon: <Plus />},
  {label: 'Password', value: 'password', icon: <Key />},
  {label: 'Help', value: 'help', icon: <HelpCircle />},
];


const Navbar = ({currentPage, onNavigate}:NavbarProps) => {

  const {logout} = useStoreSession(
    useShallow( (state => ({
      logout: state.logout,
    })))
  )
  const {clearItems} = useStoreData(
    useShallow( (state => ({
      clearItems: state.clearItems,
    })))
  )

  const [hiddenMenu, setHiddenMenu] = useState(true)
  
  const onLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      logout();
      clearItems();
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }

  return (
    <nav className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex justify-between w-full">
              <div className="flex-shrink-0 flex items-center">
                <Shield className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-slate-800">PassWallet</span>
              </div>
              {/* sm:hidden */}
              <div className='flex items-center lg:hidden'>
                <Button onClick={() => setHiddenMenu(!hiddenMenu)} className="px-4 py-2 border text-sm rounded-md font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100">
                  <ChevronDown />
                </Button>
              </div>
              <div className={`${hiddenMenu ? "hidden" : "flex"} bg-white m-2 rounded-lg p-4 border lg:border-none lg:rounded-none lg:m-0 lg:p-0 lg:flex flex-col absolute top-16 left-0 right-0 shadow-lg z-10 lg:shadow-none lg:static lg:flex-row lg:ml-6 lg:space-x-8`}>
                {
                  arrPages.map((page, index) => {
                    return (
                      <NavButton
                        key={index}
                        icon={page.icon}
                        label={page.label}
                        isActive={currentPage === page.value}
                        onClick={() => onNavigate(page.value)}
                      />
                    );
                  })
                }
                <div className="flex items-center">
                  <Button
                    onClick={onLogout}
                    className="m-auto px-4 py-2 border text-sm rounded-md font-medium text-slate-700 hover:text-slate-900 hover:bg-red-600"
                  >
                    <LogOut className="h-5 w-5 mr-2" />
                    Logout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;